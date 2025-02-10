import {Schema, model, version} from "mongoose";

const userSchema = Schema({
    name:{
        type: String,
        required: [true , "Name is required"],
        maxLength:[25 ,"Name cannot exceed 25 chacarters"]
    },

    surname:{
        type: String,
        required:[true , "Surname is required"],
        maxLength:[25,"Surname cannot exceed 25 characters"]
    },

    username:{
        type:String,
        required:[25 ,"Surname cannot "]
    },

    email:{
        type: String,
        required: [true ,"Email is required"],
        unique:true,
    },

    password:{
        type: String,
        required:[true , "Password is required"],
    },

    profilePicture:{
        type:String
    },

    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true 
    },

    role:{
        type: String,
        required: true,
        enum:["ADMIN_ROLE","USER_ROLE"]
    },

    status:{
        type:Boolean,
        default: true 
    },

    
},

{
    versionKey:false,
    timeStamps:true
})

userSchema.methods.toJSON =function(){
    const {__v , password,_id,...usuario} = this.toObject()
    usuario.uid = _id
    return usuario
}


export default model("User",userSchema)