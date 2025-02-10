import { Router } from "express";
import { deleteUser, getUserById,getUsers ,updatePassword} from "./user.controller.js";
import { deleteUserTeacherValidator, getUserTeacherByIdValidator, updatePasswordTeacherValidator } from "../middlewares/validators.js";


const router = Router()

router.get("/findUserTeacher/:uid",getUserTeacherByIdValidator,getUserById)

router.get("/",getUsers)

router.get("/:uid", getUserById);

router.delete("/deleteUserTeacher/:uid",deleteUserTeacherValidator,deleteUser)

router.patch("/updatePasswordTeacher/:uid",updatePasswordTeacherValidator,updatePassword)

export default router