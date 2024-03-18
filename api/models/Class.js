const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time : {type :Timestamp,required:true},
    topic: { type: String, required: true },
    zoomLink: { type: String, required: true },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
})

module.exports = mongoose.Model('Class',classSchema);


