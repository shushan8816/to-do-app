const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/tasks', taskRouter);

app.use(function (req, res) {
    res.status(404).send("not found");
})

mongoose.connect("mongodb://127.0.0.1:27017/to-do-app2")
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });

const port = 6000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});