export const POST_PRODUCT = 'POST_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const postProduct = (product) => {
	type: POST_PRODUCT,
	product
}

export const updateProduct = (product) => {
	
	type: UPDATE_PRODUCT,
	product
}