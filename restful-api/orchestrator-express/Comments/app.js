const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.use(
  cors({
    allowedHeaders:
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, X-Gateway-APIKey, Authorization, Accept, Origin, DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Content-Range, Rangey",
    methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
    credentials: true,
  }),
);

module.exports = app;
