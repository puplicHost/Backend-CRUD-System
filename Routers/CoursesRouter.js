const express = require("express")

const router = express.Router()

const Controllers = require("../controllers/DbControllers")


router.route('/Courses')
.get(Controllers.getAllCourses)
.post(Controllers.CreateNewCourse)

router.route("/Courses/:id")
.patch(Controllers.UpdateNewCourse)
.delete(Controllers.DeleteaCourse)


module.exports =  router
