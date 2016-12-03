export const AUTHORIZE_USER = 'AUTHORIZE_USER';

export const authorizeUser = (user, token) => ({

	type: AUTHORIZE_USER,
	user,
	token
});
