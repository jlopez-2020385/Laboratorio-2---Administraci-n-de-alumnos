import { Router } from "express";
import {saveCourseStudent,assignmentCourse } from "./assignment.controller.js"
const router = Router()

router.post("/saveCourseStudent", saveCourseStudent);

router.get("/assignmentCourse/:id", assignmentCourse);


export default router;
