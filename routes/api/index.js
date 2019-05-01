//require path package to 
const path = require("path");
const router = require("express").Router();
//requires our api routes files in order to export them together
const bookRoutes = require("./books");
const googleRoutes = require("./google");
//brings in both our api routes and exports them in one file
router.use("/books", bookRoutes);
router.use("/google", googleRoutes);
//actual export of our api/routes
module.exports = router;
