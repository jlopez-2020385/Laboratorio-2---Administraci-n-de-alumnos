import { Schema, model } from "mongoose";

const petSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: ["Programming", "Mathematics", "Science", "Languages", "Business", "Others"]
    },

    information:{
        type: String,
        required: [true , "information is required"],
        maxLength:[100 ,"Cannot have more than 100 characters"]
    },

    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User_Teacher',
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Course', petSchema);