import * as express from "express";
import * as cors from "cors";
import mockOptions from "../mock-data/options";
import * as dotenv from "dotenv";

if (!process.env.PROMAT_WEB_API_STAGE) {
  const { error } = dotenv.config();
  if (error) {
    console.error(error);
    console.error('Environment has not been set up. Make sure to set all required ENV variables or add a .env file. See .env.example for help.')
    process.exit(1);
  }
}
const app = express();

app.use(cors());

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

// COORS
