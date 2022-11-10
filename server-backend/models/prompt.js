const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promptSchema = new Schema({
  text: {
    type: String
  }
})

module.exports = mongoose.model("Prompt", promptSchema)