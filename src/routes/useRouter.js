const express = require("express")
const router = express.Router
const useController = require("../controllers/userController")
const { model } = require("mongoose")

router.post("/use", useController.register)
router.get("/use/:id", useController.getUseById)

model.exports = router