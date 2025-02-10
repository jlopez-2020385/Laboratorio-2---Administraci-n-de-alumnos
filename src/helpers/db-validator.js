import User from "../user/user.model.js"
import User_Teacher from "../user_teacher/user.model.js"
import Course from "../course/course.model.js"

export const emailExists = async (email = "") =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`the email ${email} is already registered`)

    }
}

export const usernameExists = async (username = "") =>{
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`the username ${username} is already registered`)

    }
}


export const userExists = async (uid = "") =>{
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error(" No existe el Usuario con el id proporsionado")
    }
}

//-------------------------------------------- Teacher --------------------------------------------

export const emailTeacherExists = async (email = "") =>{
    const existe = await User_Teacher.findOne({email})
    if(existe){
        throw new Error(`the email ${email} is already registered`)

    }
}

export const usernameTeacherExists = async (username = "") =>{
    const existe = await User_Teacher.findOne({username})
    if(existe){
        throw new Error(`the username ${username} is already registered`)

    }
}


export const userTeacherExists = async (uid = "") =>{
    const existe = await User_Teacher.findById(uid)
    if(!existe){
        throw new Error(" No existe el Usuario con el id proporsionado")
    }
}

//-------------------------------------------- Course --------------------------------------------

export const coursExists = async ( course = "") => {
    const existe = await Course.findOne({course});  
    if (existe) {
        throw new Error(" No existe el Curso con el id proporsionado")
    }
};