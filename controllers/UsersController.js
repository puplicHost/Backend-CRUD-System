const Users = require("../models/usersModels")
const HttpResponseText = require("../utils/httpResponseText")
const bcrypt = require("bcryptjs")

const getAllUsers = async (req, res) => {
    const AllUsers = await Users.find()
    try {
        res.status(200).json({
            status: HttpResponseText.Success,
            data: {
                AllUsers
            }
        })
    } catch (err) {
        res.status(400).json(err)
    }

}

const getUsers = async (req, res) => {
const UserId = req.params.id

    try {
            const User = await Users.findById(UserId)
            
            
        res.status(200).json({
            status: HttpResponseText.Success,
            data: {
                User
            }
        })
    } catch (err) {
        res.status(400).json(err)
    }

}

const register = async (req,res) => { 
      const {firstName,LastName,email,password} = req.body

const OldUser =  await Users.findOne({email:email})

if(OldUser){
    res.status(400).json("User is Already Exist")
}
    try{
      
        const HashingPass = bcrypt.hashSync(password , 10)
        
const newModel = new Users({
    firstName,
    LastName,
    email,
    password : HashingPass
},{"password" : false})
 await newModel.save()
 res.status(201).json(newModel)
    } catch(err){
               res.status(400).json(err)
    }

}


const login = async (req ,res) => {

      const {email,password} = req.body

      const user =  await Users.findOne({email})

      if(!user){
       return res.json("user not found")
      }

      const isMatch  =  await bcrypt.compare(password , user.password)

    if(!isMatch){
        return res.json("Your Password is Wrong")
      }else{
        res.status(200).json("Your Are in ")
      }


 }

module.exports = {
    getAllUsers,
    getUsers,
    register,
    login

}