import * as express from "express";
import * as session from "express-session";
import * as Redis from "ioredis";
import * as connectRedis from "connect-redis";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { getReviewersHandler } from "./handlers/reviewers";
import { getOptionsHandler } from "./handlers/options";
import { findRecordsHandler } from "./handlers/records";

if (!process.env.PROMAT_WEB_API_STAGE) {
  const { error } = dotenv.config();
  if (error) {
    console.error(error);
    console.error(
      "Environment has not been set up. Make sure to set all required ENV variables or add a .env file. See .env.example for help."
    );
    process.exit(1);
  }
}
const app = express();

app.use(cors());

const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USERNAME,
  REDIS_PASSWORD,
  SESSION_SECRET,
} = process.env;

const redisClient = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT && parseInt(REDIS_PORT),
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD,
});

const RedisStore = connectRedis(session);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: true,
  })
);

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
app.get("/records", findRecordsHandler);

// Get all reviewers
app.get("/reviewers", getReviewersHandler);

// Get options for forms
app.get("/options", getOptionsHandler);

app.listen(port, () => {
  console.log("Server has been started");
});
