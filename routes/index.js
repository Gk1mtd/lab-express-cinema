const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    console.log("#####################################Index Router");
    res.render("index");
});

module.exports = router;
