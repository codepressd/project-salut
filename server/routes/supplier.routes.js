import { Router } from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const router = new Router();

// northNevada: true,
//   southNevada: false,
//   terms: true,
//   username: 'dfsa',
//   email: 'faf',
//   password: 'dfa',
//   passwordConfirm: 'adfa',
//   firstName: 'afa',
//   lastName: 'dsfa',
//   companyName: 'daf',
//   address: 'asfa',
//   city: 'dfa',
//   state: 'asfda',
//   details: 'afa',
//   businessType: 'co-op'

function validateInput(data){
	let errors ={};

	Object.keys(data).map(function(objectKey, index){
		let value = data[objectKey];
		
		if (typeof value == 'string'){
			console.log('values a string', typeof value);
			if ( value == ''){

				errors.objectKey = 'This Field Is Required';
			}
		}
		 if (data[objectKey] !== true && objectKey === 'terms'){
		 	data.terms = 'Must Agree To Our Terms and Conditions';
		}
		
	});


	// if (Validator.isEmpty(data.username)){
	// 	errors.username = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.email)){
	// 	errors.email = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.password)){
	// 	errors.password = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.passwordConfirm)){
	// 	errors.passwordConfirm = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.firstName)){
	// 	errors.firstName = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.lastName)){
	// 	errors.lastName = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.companyName)){
	// 	errors.companyName = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.address)){
	// 	errors.address = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.city)){
	// 	errors.city = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.state)){
	// 	errors.state = 'This Field is Required';
	// }
	// if (Validator.isEmpty(data.businessType)){
	// 	errors.businessType = 'This Field is Required';
	// }
	// if(data.terms !== true){
	// 	errors.terms = 'Must Agree To Our Terms and Conditions';
	// }
	if(data.northNevada ||  data.southNevada !== true){
		errors.northNevada ='Must Pick A Region';
		errors.southNevada = 'Must Pick A Region';
	}

	return{
		errors,
		isValid: isEmpty(errors)
	}
}

router.post('/', (req, res) => {
	const {errors, isValid} = validateInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}
});

export default router;