import express from 'express';
import {authMiddleware} from '../middleware/auth.middleware.js'
import {login,register,home,userGet} from "../controller/auth.controller.js"
import { validate } from '../middleware/validate.middleware.js';
import { loginSchema, signupSchema } from '../validators/auth.validators.js';


const router = express.Router();

router.get('/',home)
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(validate(loginSchema),login)
router.route('/userGet').get(authMiddleware,userGet)

export {router}