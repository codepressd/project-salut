//login function

import axios from 'axios';
import { browserHistory } from 'react-router';
import { toastr } from 'react-redux-toastr';
import { authUser, authUserError } from '../actions';

export const loginUser = () => {
  return (dispatch, getState) => {
    // Get data from redux-form
    const form = getState().form.loginForm;
    const email = form.values.email;
    const password = form.values.password;
    const role = form.values.role;

    // Post to the server for login
    axios.post(`/${role}/login`, { email, password })
      .then(res => {
        // if success we push the user to the store
        const { email, _id, role, firstname, lastname } = res.data.user;
        const token = res.data.token;
        const user = {
          email,
          id: _id,
          role,
          firstname,
          lastname
        };
        dispatch(authUser(user, token));
        toastr.success('Welcome Back', `${firstname} ${lastname}`);
        browserHistory.push('/dashboard');
      })
      .catch(err => {
        // if error we push the error in the store
        const error = err.response.data;
        toastr.error(error);
        dispatch(authUserError(error));
      });
  }
}

//auth reducer
import { AUTH_USER, AUTH_USER_ERROR, LOGOUT_USER, AUTH_USER_UPDATED } from './actions';

const INITIAL_STATE = {
  user: null,
  error: null,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    case AUTH_USER_UPDATED:
      return {
        ...state,
        user: action.user
      }
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

//Route

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

const Authenticated = UserIsAuthenticated(({ children }) => children);

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route component={Authenticated}>
        <Route path="/dashboard" component={DashboardLayout} >
          <IndexRoute component={DashboardContainer} />
          <Route path="/papers" component={PapersFeedContainer} />
          <Route path="/updatedaccount" component={AccountUpdatedContainer} />
          <Route path="/papers/taketest/:id" component={PaperTest} />
        </Route>
        <Route path="/preview" component={PreviewContainer} />
      </Route>
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

//auth actions

import { browserHistory } from 'react-router';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const AUTH_USER_UPDATED = 'AUTH_USER_UPDATED';
export const LOGOUT_USER = 'LOGOUT_USER';

export const authUser = (user, token) => ({
  type: AUTH_USER,
  user,
  token
});

export const authUserError = error => ({
  type: AUTH_USER_ERROR,
  error
});

export const authUserUpdated = user => {
  console.log({ user });
  return {
    type: AUTH_USER_UPDATED,
    user
  }
};

export const logout = () => {
  localStorage.removeItem('upscore.auth');
  browserHistory.push('/');
  return {
    type: LOGOUT_USER
  }
}

//localstorage


 export const loadState = () => {
  try {
    const auth = localStorage.getItem('upscore.auth');
    if (auth === null) return undefined;
    return JSON.parse(auth);
  } catch (err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    const auth = JSON.stringify(state);
    localStorage.setItem('upscore.auth', auth);
  } catch (err) {
    console.log(err);
  }
}

//store

import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './Reducers';
import { loadState, saveState } from '../helpers/localStorage';

const routingMiddleware = routerMiddleware(browserHistory);

const persistedState = loadState();

const middleware = [
  createLogger(),
  thunk,
  promiseMiddleware(),
  routingMiddleware
];

// Set var for all the middleware + redux chrome extension
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store with the (reducer, initialState, compose)
const store = createStore(
  rootReducer,
  persistedState,
  enhancers
);

store.subscribe(throttle(() => saveState({
  auth: store.getState().auth
}), 1000));

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);

// Make the hot reload work with Redux
if (module.hot) {
  module.hot.accept('./Reducers', () => {
    const nextRootReducer = rootReducer;
    store.replaceReducer(nextRootReducer);
  });
}

export { store };
