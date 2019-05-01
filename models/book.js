const mongoose = require("mongoose");
//gets schema class from mongoose
const Schema = mongoose.Schema;


//creates the structure of our book objects that go into our mongo database
//assignes all the fields we will get from google
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});
//defines our schema and schema name
const Book = mongoose.model("Book", bookSchema);
//export our book schema
module.exports = Book;
