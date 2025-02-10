import { Router} from "express";
import {login, register,registerTeacher,loginTeacher} from "./auth.controller.js"
import { registerValidator , loginValidator ,registerTeacherValidator,loginTeacherValidator} from "../middlewares/validators.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = Router()

router.post("/registerStudent" ,uploadProfilePicture.single("profilePicture")
 , registerValidator, register)

 router.post(
    "/loginStudent",
    loginValidator,
    login
 )


 router.post("/registerTeacher" ,uploadProfilePicture.single("profilePicture")
 , registerTeacherValidator, registerTeacher)

 router.post(
    "/loginTeacher",
    loginTeacherValidator,
    loginTeacher
 )

export default router