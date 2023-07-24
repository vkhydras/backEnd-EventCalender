const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema properties here
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // ... other properties
});

const User = mongoose.model('User', userSchema);

module.exports = User;
