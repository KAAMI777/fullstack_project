const mongoose = require('mongoose');

let connected = false;

async function internalConnectDb() {
  console.log("conection to db")
  await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
}

module.exports = function connectDb() {
  if (!connected) {
    internalConnectDb().then(() => { console.log("connected to database") }).catch(err => { console.error("failed to connect to database") });
    connected = true;
  }
  return connected;
}
