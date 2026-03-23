const express = require('express')
const db = require("../db.js")
const router = express.Router()

router.get('/create', (req, res) => {
  console.log("db = ", db())
  // TODO: create new user
  res.send('created new user')
})

router.get('/modify', (req, res) => {
  // TODO: modify user
  res.send('modified new user')
})

module.exports = router;
