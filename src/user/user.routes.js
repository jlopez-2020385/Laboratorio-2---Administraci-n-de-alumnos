import { Router } from "express";
import { deleteUser, getUserById,getUsers ,updatePassword} from "./user.controller.js";
import { deleteUserValidator, getUserByIdValidator, updatePasswordValidator } from "../middlewares/validators.js";


const router = Router()

router.get("/findUser/:uid",getUserByIdValidator,getUserById)

router.get("/",getUsers)

router.get("/:uid", getUserById);

router.delete("/deleteUser/:uid",deleteUserValidator,deleteUser)

router.patch("/updatePassword/:uid",updatePasswordValidator,updatePassword)

export default router