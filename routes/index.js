
//requires the path package 
const path = require("path");
//requires the express router package
const router = require("express").Router();
//pulls all of our custom routes defined for our api 
const apiRoutes = require("./api");
//makes all our routes start with /api/ <route name>
router.use("/api", apiRoutes);
// makes our path work with whatever directory is given to it and adds it to our relative path
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
//expoerts to server.js
module.exports = router;
