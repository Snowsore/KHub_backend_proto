const express = require("express");
const app = express();

const routerRoot = require("./router");

app.use("/", routerRoot);

app.listen("8081", () => {
  console.log("Server start at 8081");
});
