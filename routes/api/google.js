//require router from express
const router = require("express").Router();
//requires our custom built controller that hits googles api to retrieve data
const googleController = require("../../controllers/googleController");

//sets route to home, and does a google findall query to google api
router
  .route("/")
  //does a findall swearch on googles api
  .get(googleController.findAll);

  //exports our google router
module.exports = router;
