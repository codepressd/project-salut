/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Home/pages/home');
   require('./modules/About/pages/about');
   require('./modules/FAQ/pages/faq');
   require('./modules/Signup/pages/signup');
   require('./modules/Login/pages/login');
   require('./modules/Restaurant/pages/restaurantSignup');
   require('./modules/Supplier/pages/supplierSignup');
   //Back End Routes
   require('./modules/Restaurant/pages/dashboard');
   require('./modules/Supplier/pages/SupplierDashboard');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Home/pages/home').default);
        });
      }}
    />
    <Route path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/About/pages/about').default);
        });
      }}
    />
  <Route
      path="/faq"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/FAQ/pages/faq').default);
        });
      }}
    />
    <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Signup/pages/signup').default);
        });
      }}
    />
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Login/pages/login').default);
        });
      }}
    />
    <Route
      path="/supplier"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Supplier/pages/supplierSignup').default);
        });
      }}
    />
    <Route
      path="/supplierDash/:userid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Supplier/pages/SupplierDashboard').default);
        });
      }}
    />
    <Route
      path="/restaurant"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Restaurant/pages/restaurantSignup').default);
        });
      }}
    />
    <Route
      path="/restDash/:userid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Restaurant/pages/dashboard').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
  </Route>
);
