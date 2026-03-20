const express = require('express');
const app = express();
const PORT = 3000;

// Define the /ping endpoint
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
