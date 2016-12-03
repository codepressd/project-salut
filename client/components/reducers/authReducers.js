//import Auth Actions
import {AUTHORIZE_USER} from '../actions/authActions';

const initialState = {
	user: null,
	error: null,
	token: null
}

const AuthUserReducer = (state = initialState, action) => {
	switch(action.type){
		case AUTHORIZE_USER:
			return{
				...state,
				user: action.user,
				token: action.token
			}
		
		default:
		return state;
	}
}
export default AuthUserReducer;