const express = require("express");
const router = express.Router();
const proxy = require("express-http-proxy");

const routerUser = require("./user");
const routerFile = require("./file");

router.get("/", (req, res) => {
  res.json({ msg: "Welcome ;)" });
});

router.use("/user", proxy("localhost:8091/user"));
router.use("/articles", proxy("localhost:8091/articles"));

module.exports = router;
