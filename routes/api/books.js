//requires express router
const router = require("express").Router();
//pulls our custom book controller api, w
const bookController = require("../../controllers/bookController");

router.route("/")
//grabs books from our database and posts them to page
  .get(bookController.findAll)
  //creates a new book and sends it to our mongodb.
  .post(bookController.create);

router
  //gets a book by id
  .route("/:id")
  //finds a book by id
  .get(bookController.findById)
  //updates a book by id
  .put(bookController.update)
  //deletes a book by id
  .delete(bookController.remove);

  //exports our defined routes to our router
module.exports = router;
