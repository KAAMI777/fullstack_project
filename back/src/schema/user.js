
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['teacher', 'student' , 'admin'],
        required: true
    }
}, { timestamps: true });
const holisticUserSchema = new mongoose.Schema({
    User : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    subjects: [{ type: String }],
    performance: {
        math: { type: Number },
        science: { type: Number },
        literature: { type: Number },
        
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);

module.exports = User;