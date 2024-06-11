const express = require("express")
const router = express.Router
const postController = require("../controllers/postController")
const Auth = require("../middlewares/Auth")
const { get } = require("mongoose")


router.get("/post", postController.getPost)
router.post("/post", Auth, postController.createPost)
router.patch("/post/:id", Auth, postController.updatePost)
router.delete("/post/:id", Auth, postController.deletePost)

module.exports = router;