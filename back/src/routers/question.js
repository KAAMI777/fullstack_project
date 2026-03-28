const express = require("express");
const quiz = require("../third_party_ai/gemini");
const auth = require("../utils/authmiddle");

const router = express.Router();

// Protected route
router.get("/create", auth, async (req, res) => {
  const text = req.query.text;
  const quizData = await quiz(text);
  res.json({
    msg: "Question created",
    user: req.user,
    quiz: quizData,
  });
});

module.exports = router;
