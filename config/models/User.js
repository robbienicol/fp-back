// models/User.js

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  person: {
    type: String,
    required: true,
  },
  membershipLength: {
    type: Number,
    required: true,
  },
  dateStarted: {
    type: String,
    required: true,
  },
  dateToExpire: {
    type: String,
    required: true,
  },
})

module.exports = User = mongoose.model("user", UserSchema)
