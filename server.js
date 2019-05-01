//assings a variable to our express npm package so we can use it to create a server
const express = require("express");
//assings a variable to the mongoose package so we can implenet mongoose
const mongoose = require("mongoose");
//brings in our custom desinged routes for our server
const routes = require("./routes");
//app creates an instance of express
const app = express();
//choses production or local port to run server on
const PORT = process.env.PORT || 3001;
// sets up expresses midleware in order to parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sets our front end to build in the production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//uses our defined routes in our server
app.use(routes);
//connects to our mongo db in the production environment or in the development environment
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
//listens for a port locally
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
