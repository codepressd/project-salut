import { Router } from 'express';
import passport from 'passport';
import validateInput from '../util/validateSignup';
import productController from '../controllers/product.controller';

const router = new Router();

router.route('/').post(productController.postProduct);

export default router;