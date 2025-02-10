import { hash } from "argon2";
import Course from "./course.model.js"
import User_Teacher from '../user_teacher/user.model.js';



export const saveCourse  = async (req, res) => {
    try {
        const data = req.body;
        const userTeacher  = await User_Teacher.findOne({ email: data.email });

        const course = new Course({
            ...data,
            instructor: userTeacher._id,
        });

        await course.save();

        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        console.error("Error al guardar el curso:", error);
        res.status(500).json({
            success: false,
            message: 'Error al guardar el curso',
            error
        });
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        
        await Course.findByIdAndUpdate(id, { status: false });

        res.status(200).json({ 
            success: true,
            message: 'Curso eliminada exitosamente' 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la Curso',
            error
        });
    }
}


export const updateCourse  = async (req, res) => {
    try {
        const { id } = req.params;
        const  data  = req.body;

        const course = await Course.findByIdAndUpdate(id, data, { new: true });

        if (!course) {
            return res.status(404).json({
                success: false,
                msg: 'Curso no encontrado',
            });
        }

        res.status(200).json({
            success: true,
            msg: 'Course Actualizado',
            course,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar Course',
            error: err.message
        });
    }
}


export const coursesteacher = async (req, res)=> {
    try{
        const { id } = req.params;
        const { limite = 5 , desde = 0 } = req.query
        const query = { instructor: id, status: true }
        const [total, course] = await Promise.all([
            User.countDocuments(query),
            User.find(query).skip(Number(desde)).limit(Number(limite))
    ]);
  
      return res.status(200).json({ 
        success: true,
        total,
        user
      });
  
    }catch(err){
  
      return res.status(500).json({
        success: false,
        message: "Error de lista datos no encontrados ",
        error: err.message
      });
  
    }
  
}