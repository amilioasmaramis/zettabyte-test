const router = require("express").Router();
const CommentsRoute = require("./commentRoute");

router.use("/comments", CommentsRoute);

module.exports = router;
