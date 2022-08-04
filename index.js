const express = require("express");
const app = express();
const cors = require("cors");

const routerRoot = require("./router");

const corsOptions = {
  origin: "https://khub.meijinerp.com",
};

app.use(cors(corsOptions));
app.use("/", routerRoot);

app.listen("8091", () => {
  console.log("Server start at 8091");
});
