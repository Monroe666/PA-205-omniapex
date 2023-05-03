const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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

app.listen(3001, () => {
    console.log("running backend server");
})