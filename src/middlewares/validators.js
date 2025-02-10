import { body, check } from "express-validator"; 
import { emailExists, usernameExists , userExists , emailTeacherExists ,usernameTeacherExists, userTeacherExists} from "../helpers/db-validator.js";
import { validarCampos } from "./validar-campos.js";

export const registerValidator = [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("username").not().isEmpty().withMessage("Username is requierd"),
    body("email").not().isEmpty().withMessage("Email is requierd"),
    body("email").isEmail().withMessage("Email is requierd"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),

    validarCampos
]

export const loginValidator =[
    body("email").optional().isEmail().withMessage("Invalid email"),
    body("username").optional().isString().withMessage("Invalid username"),
    body("password").isLength({min:8}).withMessage("El password debe al menos 8 caracters"),
    validarCampos
]


export const getUserByIdValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userExists),
    validarCampos
]

export const deleteUserValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userExists),
    validarCampos
    
]

export const updatePasswordValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userExists),
    body("newPassword").isLength({min:8}).withMessage("El password devetener almenso 8 caracters"),
    validarCampos
    
]


//-------------------------------------------- Teacher --------------------------------------------
export const registerTeacherValidator = [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("username").not().isEmpty().withMessage("Username is requierd"),
    body("email").not().isEmpty().withMessage("Email is requierd"),
    body("email").isEmail().withMessage("Email is requierd"),
    body("email").custom(emailTeacherExists),
    body("username").custom(usernameTeacherExists),

    validarCampos
]

export const loginTeacherValidator =[
    body("email").optional().isEmail().withMessage("Invalid email"),
    body("username").optional().isString().withMessage("Invalid username"),
    body("password").isLength({min:8}).withMessage("El password debe al menos 8 caracters"),
    validarCampos
]


export const getUserTeacherByIdValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userTeacherExists),
    validarCampos
    
]

export const deleteUserTeacherValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userTeacherExists),
    validarCampos
    
]

export const updatePasswordTeacherValidator =[
    check("uid").isMongoId().withMessage("No es un id valido"),
    check("uid").custom(userTeacherExists),
    body("newPassword").isLength({min:8}).withMessage("El password devetener almenso 8 caracters"),
    validarCampos
    
]


