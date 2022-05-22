var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    name: String,
    date: String,
    progress: String
});

mongoose.model('Create', PostSchema);