export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_ERROR = 'AUTHORIZE_ERROR';
export const AUTHORIZE_USER_UPDATE = 'AUTHORIZE_USER_UPDATE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const authorizeUser = (user, token) => ({

	type: AUTHORIZE_USER,
	user,
	token
});

export const authorizeUserError = (error) => ({

	type: AUTHORIZE_USER,
	error
});

export const authorizeUserUpdate = (user) => ({

	type: AUTHORIZE_USER_UPDATE,
	user
});

export const logoutUser = () => ({

	type: USER_LOGOUT,
	
});

