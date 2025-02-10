import { Router } from "express";
import {saveCourse ,deleteCourse,updateCourse,coursesteacher} from "./course.controller.js"
import {createCoursValidator,deleteCoursValidator,updateCoursValidator} from"../middlewares/course-validators.js"

const router = Router()

router.post("/saveCourse",createCoursValidator, saveCourse);

router.delete("/deleteCourse/:id",deleteCoursValidator, deleteCourse);

router.put("/updateCourse/:id", updateCoursValidator, updateCourse)

router.get("/coursesteacher/:id", coursesteacher);


export default router;
