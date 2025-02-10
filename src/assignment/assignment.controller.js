import { hash } from "argon2";
import Assignment from "./assignment.model.js"
import Course from "../course/course.model.js"
import User from "../user/user.model.js"



export const saveCourseStudent  = async (req, res) => {
    try {
        const data = req.body;

        const course = await Course.findById(data.courseId);
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Curso no encontrado"
            });
        }

        const student = await User.findById(data.studentId);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Estudiante no encontrado"
            });
        }

        const assignmentCount = await Assignment.countDocuments({
            student: data.studentId,
            
        });

        if (assignmentCount >= 3) {
            return res.status(400).json({
                success: false,
                message: "El estudiante ya ha sido asignado al 3 veces cursos"
            });
        }

        const existingAssignment = await Assignment.findOne({
            student: data.studentId,
            course: data.courseId
        });

        if (existingAssignment) {
            return res.status(400).json({
                success: false,
                message: "El estudiante ya está asignado a este curso"
            });
        }

        const assignment = new Assignment({
            student: data.studentId,
            course: data.courseId
        });

        await assignment.save();

        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al asignar estudiante al curso',
            error
        });
    }
}


export const assignmentCourse = async (req, res)=> {
    try{
        const { id } = req.params;
        const { limite = 5 , desde = 0 } = req.query
        const assignments = await Assignment.find({ student: id })
            .skip(Number(desde))
            .limit(Number(limite));
            const courseIds = assignments.map(assignment => assignment.course);
            const course = await Course.find({ '_id': { $in: courseIds } ,'status': true});
  
      return res.status(200).json({ 
        success: true,
        course
      });
  
    }catch(err){
  
      return res.status(500).json({
        success: false,
        message: "Error de lista datos no encontrados ",
        error: err.message
      });
  
    }
  
}