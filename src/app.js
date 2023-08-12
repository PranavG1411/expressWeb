const express = require("express");
const app = express(); // app variable is declared as their through which we can access express modules
// const port = 3000;// this is port number that we use in local host
const path = require("path"); // to get access to other folder in in pc
const hbs = require('hbs'); // hbs ko required kiya 
const port = process.env.PORT || 3000; // use when we are hosting at the time of deplyoment

// Public static path
const static_path = path.join(__dirname, "../public"); // to coonect to path in another Folder
const template_path = path.join(__dirname, "../templates/views"); // to coonect to path in another Folder
const partials_path = path.join(__dirname, "../templates/partials"); // to coonect to path in another Folder

// view engine setup
app.set("view engine", "hbs"); // to tell express that we are using view tempalate
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path)); // its will connect to my static Html page in another

// Routing
app.get("/", (req, res) => {
  res.render("index");
}); // This is the Home Page

app.get("/about", (req, res) => {
  res.render("about");
}); // This is the about page

app.get("/weather", (req, res) => {
  res.render("weather");
}); // This is the weather page

app.get("*", (req, res) => {
  res.render("404EroorPage",{
    errorMsg:"Opps! Page not found"
  });
}); // if some page does work than an Error page is introduced

app.listen(port, () => {
  console.log(`listning to the port ${port}`);
});
