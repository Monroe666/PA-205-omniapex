const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "folowa",
    }
)

db.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

app.post('/signup', (req, res) => {
    const account = req.body.account;
    const password = req.body.password;
    const username = req.body.username;
    const usertype = req.body.usertype;

    db.query("INSERT INTO user (account, password, username, usertype) VALUES(?, ?, ?, ?)",
        [account, password, username, usertype]
    )
})

app.post('/signin', (req, res) => {
    const account = req.body.account;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE account = ? AND password = ?",
        [account, password],
        (err, result) => {
            if (err) {
                req.setEncoding({ err: err });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "The email address and password do not match" });
                }
            }
        }
    )
})

app.get('/user/:email', (req, res) => {
    const account = req.params.email;

    db.query("SELECT * FROM user WHERE account = ?",
        account,
        (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
})

app.post('/bio', (req, res) => {
    const bio = req.body.bio;
    const account = req.body.email;

    db.query("UPDATE user SET bio = ? WHERE account = ?",
        [bio, account]
    )
})

app.post('/name', (req, res) => {
    const name = req.body.name;
    const account = req.body.email;

    db.query("UPDATE user SET username = ? WHERE account = ?",
        [name, account]
    )
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload/:email', upload.single('image'),
    (req, res) => {
        const account = req.params.email;
        const image = req.file.filename;

        db.query("UPDATE user SET picture = ? WHERE account = ?",
            [image, account]
        )
    })

app.post('/notice', (req, res) => {
    const account = req.body.email;
    const content = req.body.content;

    db.query("INSERT INTO notice (user_account, content) VALUES(?, ?)",
        [account, content]
    )
})

app.get('/notice/:email', (req, res) => {
    const account = req.params.email;

    db.query("SELECT * FROM notice WHERE user_account = ?",
        account,
        (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
})

app.listen(3001, () => {
    console.log("running backend server");
})