import axios from "axios";
//export our front end methods that link to our server side CRUD routes
export default {
  //getBooks method 
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  //getSavedBooks method that returns saved books from server db
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  //deletes bookd from server db
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  //saves a book to server db
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
