const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoute = require("./api/routes/contact");
const app = express();
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  console.log("I'm middleware function");
  next();
});

const PORT = process.env.PORT || 3000;

app.use("/api/contacts", contactRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello Programmer</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
