const router = require("express").Router();
const ArticlesController = require("../controllers/articlesController.js");

router.post("/create", ArticlesController.create);
router.post("/readAll", ArticlesController.readAll);
router.put("update/:_id", ArticlesController.update);
router.delete("delete/:_id", ArticlesController.delete);

module.exports = router;
