import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
import rateLimit from "express-rate-limit";
import { PORT } from "./config.js";
import twilio from "twilio";
// import springedge from "springedge";
// var params = {
//   sender: "SEDEMO",
//   apikey: "6on957rb36978j0rl148a6j226v03jmr",
//   to: ["917550169377"],
//   message: "Hi, this is a test message",
//   format: "json",
// };
// springedge.messages.send(params, 5000, function (err, response) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("!!!!!!" + JSON.stringify(response));
// });

// let sid = "ACd243ea930658f29b29c1805a6f8591cf";
// let auth_token = "c7a05daaa3d236c00f3b029511caff93";

// // var twilio = require("twilio")(sid, auth_token);
// const client = new twilio(sid, auth_token);

// client.messages
//   .create({
//     from: "+18142401641",
//     to: "+917550169377",
//     body: "this is a testing message",
//   })
//   .then(function (res) {
//     console.log("message has sent!");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const app = express();
// Define the rate limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000000000000, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Apply the rate limiter to all requests
app.use(limiter);

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

const port = PORT || 8080;

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use("/api", router);

/** start server only when we have valid connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!" + error);
  });
