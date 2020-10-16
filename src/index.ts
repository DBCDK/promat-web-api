import * as express from "express";
import mockOptions from "../mock-data/options";

const app = express();

const port = 3000;

// Authticate a user with OAuth data
app.post("/user/oauth", (req, res) => {
  res.send({ message: "hello world" });
});

// Get current user
app.get("/user", (req, res) => {
  res.send({ message: "hello world" });
});

// Log out current user
app.delete("/user", (req, res) => {
  res.send({ message: "hello world" });
});

// Get all cases (for user) - with optional query support
app.get("/cases", (req, res) => {
  res.send({ message: "hello world" });
});

// Get all pending cases (for user)
app.get("/cases/pending", (req, res) => {
  res.send({ message: "hello world" });
});

// Get all completed cases (for user)
app.get("/cases/completed", (req, res) => {
  res.send({ message: "hello world" });
});

// Create case
app.post("/cases", (req, res) => {
  res.send({ message: "hello world" });
});

// Get case
app.post("/cases/:id", (req, res) => {
  res.send({ message: "hello world" });
});

// Update case
app.put("/cases/:id", (req, res) => {
  res.send({ message: "hello world" });
});

// Change case status
app.patch("/cases/:id", (req, res) => {
  res.send({ message: "hello world" });
});

// Change case review
app.put("/cases/:id/review", (req, res) => {
  res.send({ message: "hello world" });
});

// Get records with query params
app.get("/records", (req, res) => {
  res.send({ message: "hello world" });
});

// Get all reviewers
app.get("/reviewers", (req, res) => {
  res.send({ message: "hello world" });
});

// Get options for forms
app.get("/options", (req, res) => {
  res.send(mockOptions);
});

app.listen(port, () => {
  console.log("Server has been started");
});
