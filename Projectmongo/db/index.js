const mongoose = require('mongoose')

const url = process.env.URL;
console.log("🚀 ~ file: index.js:4 ~ url:", url)

const dbConnect = () => {
  mongoose.connect(url)
    .then(() => {
      console.log("Connected to MongoDB successfully")
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB:", err)
    })
}

module.exports = { dbConnect }
