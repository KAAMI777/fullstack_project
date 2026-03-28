const mongoose = require("mongoose");

const questionSchemaRaw = new mongoose.Schema(
  {
    text: { type: String, required: true },
    options: [{ type: String, is_correct: Boolean }],
  },
  { timestamps: true },
);

module.exports = {
  questionSchema: mongoose.module("Question", questionSchemaRaw),
  questionSchemaRaw,
};
