const mongoose = require('mongoose')
const User = mongoose.model('User')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { jwtSecret } = require('./../key');
const router = express.Router()
const requireLogin = require('../middleware/auth');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'please fill all fields' });
    }
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ error: "user already exist" })
        }
        const Hashpasword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: Hashpasword });

        await newUser.save();
        console.log("REGISTRED USER NAME : ", newUser)

        return res.status(200).json(newUser);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }

})
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "please fill all fields" });
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(422).json({ error: "invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(422).json({ error: "invalid credentials" });
        }
        const token = jwt.sign(
            {
                _id: user._id,
            },
            jwtSecret
        );
        res.status(200).json({ message: "login sucessfull", token: token });
        console.log("LOGGED-IN USER NAME : ", user)

    } catch (error) {
        console.log(error);
    }
});

router.get('/test', requireLogin, (req, res) => {
    res.status(200).json({ msg: 'success' });
})
module.exports = router;