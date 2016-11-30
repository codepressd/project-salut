import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    let typeOfUser = '';
    Object.keys(data).map(function(objectKey, index) {
        let value = data[objectKey];

        if (typeof value == 'string' && value.length < 1) {

            errors[objectKey] = 'This Field Is Required';

        }
        if (data[objectKey] !== true && objectKey === 'terms') {
            errors.terms = 'Must Agree To Our Terms and Conditions';
        }

    });
    //get user type
    if(data.userRestaurant){
        typeOfUser= 'restDash';
    }
     if(data.userSupplier){
        typeOfUser= 'supplierDash';
    }
// //Check if one region is checked
//     if (data.northNevada && data.southNevada !== true) {
//         errors.northNevada = 'Must Pick A Region';
//         errors.southNevada = 'Must Pick A Region';
//     }
// //Check if user is a restaurant or supplier

// if (data.userRestaurant && data.userSupplier !== true) {
//         errors.userRestaurant = 'Must Pick A User Type';
//         errors.userSupplier =  'Must Pick A User Type';
//     }
    if (data.password !== data.passwordConfirm) {
        errors.password = 'Passwords Don\'t Match';
        errors.passwordConfrim = 'Passwords Don\'t Match';
    }

    return {
        errors,
        typeOfUser,
        isValid: isEmpty(errors)
    }
}
