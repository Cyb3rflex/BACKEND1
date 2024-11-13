// crud (create(get), read(post), update, delete)

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.end("Welcome to my server!");
});

app.listen(3000, () => {
  log("EXPRESS APP LISTENING ON PORT 3000");
});

assignment;
// const { log } = require("console");
// const express = require("express");
// const app = express();

// Array of users
const users = [
  { name: "John Doe", email: "john@example.com", password: "password123" },
  { name: "Jane Smith", email: "jane@example.com", password: "password456" },
  { name: "Mike Brown", email: "mike@example.com", password: "password789" },
];

// Endpoint to send the users array as a response
app.get("/user", (req, res) => {
  res.json(users); // Corrected line
});

app.listen(5000, () => {
  log("EXPRESS APP LISTENING TO PORT 5000");
});
