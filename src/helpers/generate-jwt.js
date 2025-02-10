import jwt from "jsonwebtoken"
import { token } from "morgan"

export const generateJWT = (uid = " ") =>{
    return new Promise ((resolve, reject) =>{
        const pyaload = {uid}

        jwt.sign(
            pyaload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: "1h"
            },


            (err,token) =>{
                if(err){
                    reject({
                        success: false,
                        message:err
                    })
                }else{
                    resolve(token)
                }
            }
        )

    })
}