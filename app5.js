const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/abc", function (req, res) {
    res.sendFile(__dirname + "index");

})
app.get("/abcd", function (req, res) {
    res.sendFile(__dirname + "index");

})

let URI = "mongodb+srv://ridit:anjuli2012@cluster0.jp5qoo3.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async () => {

    try {

        let con = await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("database is connected with the given URI ")
    }

    catch (err) {

        console.log(err)
    }

}

connectdb()

let schemaa = new mongoose.Schema({
    name11:
    {
        type: String,
        required: true,
        unique: false
    }, name1:
    {
        type: String,
        required: true,
        unique: false
    }, product:
    {
        type: String,
        required: true,
        unique: false
    }, email:
    {
        type: String,
        required: true,
        unique: false
    }, phonenumber:
    {
        type: String,
        required: true,
        unique: false
    }
})

let Note = new mongoose.model("Student123", schemaa)

saveDoc = () => {
    // let s1 = new Student({

    //     id: "abcddde",
    //     pass: "ddddde"

    // })
    // s1.save()

    app.get("/abc", function (req, res) {
        res.sendfile(__dirname + "index")
    })


    app.post("/abc", function (req, res) {
        let newNote = new Note({
            name11: req.body.name11,
            name1: req.body.name1,
            product: req.body.product,
            email: req.body.email,
            phonenumber: req.body.phonenumber


        });
        newNote.save();
        res.redirect('/');
    })

}

// module.exports = saveDoc
// module.exports = connectdb
// const saveDoc = require("./app3.js")
saveDoc()





let schemaaa = new mongoose.Schema({
    name12:
    {
        type: String,
        required: true,
        unique: false
    }, email2:
    {
        type: String,
        required: true,
        unique: false
    }, text123:
    {
        type: String,
        required: true,
        unique: false
    }, text1234:
    {
        type: String,
        required: true,
        unique: false
    }
})

let Note1 = new mongoose.model("Student1234", schemaaa)

saveDoc = () => {
    // let s1 = new Student({

    //     id: "abcddde",
    //     pass: "ddddde"

    // })
    // s1.save()

    app.get("/abcd", function (req, res) {
        res.sendfile(__dirname + "index")
    })


    app.post("/abcd", function (req, res) {
        let newNote1 = new Note1({
            name12: req.body.name12,
            email2: req.body.email2,
            text123: req.body.text123,
            text1234: req.body.text1234


        });
        newNote1.save();
        res.redirect('/');
    })

}

// module.exports = saveDoc
// module.exports = connectdb
// const saveDoc = require("./app3.js")
saveDoc()



app.listen(4000, function () {
    console.log("chal");
})