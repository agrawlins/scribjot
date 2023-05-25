const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
  text: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Entry", entrySchema)