const express = require("express")
const router = express.Router
const authController = require("../controllers/authController")
const { model } = require("mongoose")

router.post("/auth/login" , authController.login)

model.exports = router