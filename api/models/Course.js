const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
});

module.exports = mongoose.model('Course', courseSchema);
