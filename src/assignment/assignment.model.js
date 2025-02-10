import { Schema, model } from "mongoose";

const petSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },

    student:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Assignment', petSchema);