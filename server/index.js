const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://tysweet:sweetty1@ds119350.mlab.com:19350/aca-express-practice-4");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);
const CommentRoutes = require("./routes/CommentRoutes");
app.use(CommentRoutes);
const ProductRoutes = require("./routes/ProductRoutes");
app.use(ProductRoutes);
const VehicleRoutes = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);


// Listening to port 3001
app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening to port 3001");
});
