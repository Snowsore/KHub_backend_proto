const express = require("express");
const router = express.Router();

const routerUser = require("./user");
const routerFile = require("./file");

router.use("/user", routerUser);
router.use("/file", routerFile);

module.exports = router;
