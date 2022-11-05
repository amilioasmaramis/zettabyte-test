const router = require("express").Router();
const CommentsController = require("../controllers/commentsController.js");

router.post("/create", CommentsController.create);
router.post("/readAll", CommentsController.readAll);
router.put("update/:_id", CommentsController.update);
router.delete("delete/:_id", CommentsController.delete);

module.exports = router;
