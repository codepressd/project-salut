import { Router } from 'express';
import passport from 'passport';
import validateInput from '../util/validateSignup';
import userController from '../controllers/user.controller';

const router = new Router();

router.route('/').post(userController.login);

export default router;