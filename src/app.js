const path = require("path");
const express = require("express");
const hbs = require("hbs");
const voteFunctions = require("./utils/vote");

const app = express();

//heroku port
const port = process.env.PORT || 4000;

// For CSS, IMG, & Client Side JS
const publicDirectory = path.join(__dirname, "../public");

// For HTML Content
const viewPath = path.join(__dirname, "../templates/views");

// For HEADER & FOOTER AND ALL REUSABLE HTML
const partialsPath = path.join(__dirname, "../templates/partials");

// View HBS
app.set("view engine", "hbs");
// Views Path => Cause we changed folder to templates, it no longer Knows views
app.set("views", viewPath);
// Link HBS and Partials
hbs.registerPartials(partialsPath);

//Serve our Public Directory  with express
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register", {
    Ready: "Yes we are ready",
  });
  voteFunctions.registerVoter(
    req.query.first,
    req.query.surname,
    req.query.email,
    req.query.tel,
    req.query.city
  );
});

app.listen(port, () => {
  console.log("We are ready and listening on " + port);
});
