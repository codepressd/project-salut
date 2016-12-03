import { Router } from 'express';
import passport from 'passport';
//import signupController from '../controllers/user.controller';
import validateInput from '../util/validateSignup';
import userController from '../controllers/user.controller';



const router = new Router();

router.route('/').post(userController.register);

// router.post('/', (req, res) => {
//     const { errors, isValid } = validateInput(req.body);

//     if(isValid){
//     	res.json({ success: true});
//     }else {
//         res.status(400).json(errors);
//     }
// });

export default router;
