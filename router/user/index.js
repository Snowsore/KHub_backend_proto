const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "user" });
});

module.exports = router;
