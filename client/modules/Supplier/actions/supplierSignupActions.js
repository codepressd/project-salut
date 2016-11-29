import axios from 'axios';

export function supplierSignupRequest(data){
	
	return dispatch =>{

		return axios.post('api/suppliers', data);
	}
}