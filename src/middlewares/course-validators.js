import { body, param } from "express-validator";
import { coursExists } from "../helpers/db-validator.js";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handle-errors.js";


export const createCoursValidator = [
    body("category").notEmpty().withMessage("La categoría es requerida"),
    body("information").notEmpty().withMessage("La información es requerida"),
    body("email").isEmail().withMessage("El correo del propietario es requerido y debe ser válido"),
    body("category").custom(coursExists),
    validarCampos,
    handleErrors
];

export const deleteCoursValidator =[
    param("id").isMongoId().withMessage("No es un id valido"),
    param("id").custom(coursExists),
    validarCampos,
]

export const updateCoursValidator = [
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(coursExists),
    validarCampos,
    handleErrors
]