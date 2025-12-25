const DbModle = require("../models/DBModels")
const HttpResponseText = require("../utils/httpResponseText")



const getAllCourses = async (req, res) => {

    try {
        const Courses = await DbModle.find()
        res.json({
            status: HttpResponseText.Success,
            data: Courses

        })
    } catch (error) {

        console.log(error)


    }



}

const CreateNewCourse = async (req, res) => {

    try {

        const course = req.body

        const NewCourse = new DbModle(course)

        await NewCourse.save()

        res.json({
            status: HttpResponseText.Success,
            data: NewCourse
        })

    } catch (error) {

        console.log(error)


    }

}

const UpdateNewCourse = async (req, res) => {

    try {
        const Id = req.params.id
        const Data = req.body

        const UpdateCourse = await DbModle.findByIdAndUpdate(Id, Data)

        res.json({
                 status: HttpResponseText.Success,
            data: UpdateCourse
        })
    } catch (error) {
        res.json(error)
    }


}

const DeleteaCourse = async (req, res) => {

    try {
        const Id = req.params.id

        const DeleteCourse = await DbModle.findByIdAndDelete(Id)

        res.json({
                        status: HttpResponseText.Success,
            data: {
                SrverRespones : "Couese Was Deleted",
                DeleteCourse : DeleteCourse
            
            }
        })
    } catch (error) {
        res.json(error)
    }



}


module.exports = {
    getAllCourses,
    CreateNewCourse,
    UpdateNewCourse,
    DeleteaCourse

}