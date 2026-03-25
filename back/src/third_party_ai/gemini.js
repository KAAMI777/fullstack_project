const axios = require('axios');
const API_KEY = process.env.API_KEY;
async function generateQuiz(texti) {
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
            contents: [{
                parts: [{
                    text: `${texti}:
                    {
                      "questions": [
                        {
                          "question": "",
                          "options": ["", "", "", ""],
                          "answer": ""
                        }
                      ]
                    }`
                }]
            }]
        }
    );

    const text = response.data.candidates[0].content.parts[0].text;

   
    const match = text.match(/\{[\s\S]*\}/);
    return JSON.parse(match[0]);

}
module.exports = generateQuiz;