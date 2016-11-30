import { Router } from 'express';
import passport from 'passport';
//import signupController from '../controllers/signup.controller';
import validateInput from '../util/validateSignup';



const router = new Router();

router.post('/', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

// router.post('/', (req, res) => {
//     const { errors, isValid } = validateInput(req.body);

//     if(isValid){
//     	res.json({ success: true});
//     }else {
//         res.status(400).json(errors);
//     }
// });

export default router;
