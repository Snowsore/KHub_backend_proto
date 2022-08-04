const express = require("express");
const router = express.Router();
const proxy = require("express-http-proxy");

const routerUser = require("./user");
const routerFile = require("./file");

router.get("/", (req, res) => {
  res.json({ msg: "Welcome ;)" });
});

const proxyRend = proxy("localhost:8092", {
  proxyReqPathResolver: (req) => req.originalUrl,
});

router.use("/users", proxyRend);
router.use("/articles", proxyRend);

module.exports = router;
