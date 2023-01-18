const express = require('express')
const app = express();
const mongoose = require('mongoose')
const { DB } = require('./key.js')
const port = 5010;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(DB, connectionParams)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.log("DB connection failed", err);
    });

    
app.listen(port, () => {
    console.log(`server listening at ${port}`)
})