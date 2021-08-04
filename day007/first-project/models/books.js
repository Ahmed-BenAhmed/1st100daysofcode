const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema and model

const bookSchema = new Schema({
    title: String,
    author: String,
    price: Number
});

const book = mongoose.model("book",bookSchema);

module.exports = book;