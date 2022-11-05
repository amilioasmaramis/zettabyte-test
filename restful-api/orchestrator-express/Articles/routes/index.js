const router = require("express").Router();
const ArticlesRoute = require("./articlesRoute");

router.use("/articles", ArticlesRoute);

module.exports = router;
