const mongoose = require('mongoose')
const express = require('express')
const FormData = mongoose.model('FormDataModel')
const router = express.Router();


router.post('/createuserformdata', async (req, res) => {
    try {
        const { firstName, lastName, address, gender, age, city, status, email, contact, profilePhoto } = req.body;
        if (!firstName || !lastName || !address || !gender || !age || !city || !status || !email || !contact || !profilePhoto) {
            return res.status(400).json({ error: "please fill all required fields !!" })
        }
        const postData = new FormData({
            firstName,
            lastName,
            address,
            gender,
            age,
            city,
            status,
            email,
            contact,
            profilePhoto,
            // Date,
            ...req.body,
        })
        await postData.save();
        console.log(postData)
        return res.status(200).json({ message: "User Data Created", postData })
    }
    catch (err) {
        return res.status(400).json({ error: err })
    }
});


router.get('/getalluserdata', async (req, res) => {
    try {
        const { firstName, lastName, address, gender, age, city, status, email, contact, profilePhoto} = req.body;
        const userData = await FormData.find({})
        console.log("congo...you have got users data")
        return res.status(200).json({ message: "you have got users data", userData })
    }
    catch (err) {
        console.log("you have'nt got users data")
        return res.status(400).json({ error: err })
    }
})

router.delete('/removeusersdata/:id' , async(req,res)=>{
    let removeData = await FormData.findByIdAndDelete({_id : req.params.id})
    console.log(`${req.params.id} , users data has been deleted`)
    return res.status(200).json({ message: " users data has been deleted", removeData })
})

module.exports = router;

