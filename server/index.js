const express = require('express')
const app = express();
const mongoose = require('mongoose')
const { DB } = require('./key.js')
const port = 5010;
const cors = require('cors')
require('./model/formDataModel')

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

app.use(express.json())
app.use(cors());

app.use(require('./routes/formDataRoute'))

app.listen(port, () => {
    console.log(`server listening at ${port}`)
})