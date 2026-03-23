const express = require('express')
const router = express.Router()

router.get('/create', (req, res) => {
  // TODO: create new user
  res.send('created new question')
})

router.get('/delete', (req, res) => {
  // TODO: delete user
  res.send('delete question')
})


router.get('/modify', (req, res) => {
  // TODO: modify user
  res.send('modified question')
})

module.exports = router;
