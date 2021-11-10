const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postTitle: String,
    postAuthor: String,
    postSubtitle: String,
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
});

const Post = mongoose.model('Photo', postSchema);

module.exports= Post;