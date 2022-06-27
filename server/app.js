require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const applyRoutes = require('./src/Routes');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT | 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

applyRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
