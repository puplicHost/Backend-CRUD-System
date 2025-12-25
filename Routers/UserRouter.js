const express = require("express")

const router = express.Router()

const UsersController = require("../controllers/UsersController")

router.route('/user')
.get(UsersController.getAllUsers)
.post(UsersController.register)


router.route('/user/:id')
.get(UsersController.getUsers)

router.route('/user/login')
.post(UsersController.login)





module.exports = router