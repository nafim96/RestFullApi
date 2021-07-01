const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
//Connection backend server with mongoDB Local server in Here
mongoose.connect("mongodb://localhost:27017/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Checking Database connection
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Data base connection ready");
});

// import contact route from routes folder
const contactRoute = require("./api/routes/contact");

//import Admin route
const adminRoute = require("./api/routes/admin");

//import user route
const userRoute = require("./api/routes/user");
// Established Middleware and permit to next step using next() Function
app.use((req, res, next) => {
  console.log("I'm middleware function");
  next();
});

// Create dynamic port use dotenv and use default port 3000
const PORT = process.env.PORT || 5000;

// All Contact Routing method here using middleware
app.use("/api/contacts", contactRoute);

//Admin Routing Method Here
app.use("/api/admins", adminRoute);

//Admin Routing Method Here
app.use("/api/users", userRoute);

// This Routing for Home page
app.get("/", (req, res) => {
  res.send("<h1>Hello Programmer</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
