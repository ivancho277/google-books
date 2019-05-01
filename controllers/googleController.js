//requires our axios package to perform crud operations
const axios = require("axios");
//sets our database to require our models
const db = require("../models");

module.exports = {
  //our defined findAll method to hit googles api.
  findAll: function(req, res) {
    //deconstructs out request param to an obj.
    const { query: params } = req;
    //calls googles api with our query request
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      //filters our json response to only have the fields we need in a new array
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //runs a find search in our db and selects the books from google that ARE NOT already in our database to show
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      //responds with a json object of books that google gets and are not in our db
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
