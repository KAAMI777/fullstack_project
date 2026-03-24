const mongoose = require('mongoose')

const userSchemaRaw = new mongoose.Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ['learner', 'educator', 'admin'],
    default: 'learner',
    required: true,
  },
}, { timestamps: true });


module.exports = { userSchema: mongoose.module('User', userSchemaRaw), userSchemaRaw };
