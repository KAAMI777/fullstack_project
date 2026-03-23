const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ['learner', 'educator', 'admin'],
    default: 'learner',
    required: true,
  },
}, { timestamps: true });


module.exports = mongoose.module('User', userSchema);
