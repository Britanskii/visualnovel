const mysql = require('mysql')
const express = require("express");
const app = express();

require("./config/connection")

app.use(express.json())

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "novel"
})

conn.connect(err => {
    if (err) {
        console.error(err)
        throw err;
    } else {
        console.log("Database --- OK")
    }
})

//
app.post("/api/saves/",   (req, res) => {

    const id = req.body.id
    const save = JSON.stringify(req.body.save)

    const querySaves = `SELECT * FROM \`saves\` WHERE \`player_id\` = ${id}`

    conn.query(querySaves, (err, res) => {
        if (res.length === 0) {
            const query = `INSERT INTO \`saves\` (\`id\`, \`player_id\`, \`save\`) VALUES (NULL, '${id}', '${save}')`

            conn.query(query, (error, res) => {
                console.log(error)
            })
        } else {
            const query = `UPDATE \`saves\` SET \`save\` = '${save}' WHERE \`saves\`.\`player_id\` = ${id}`

            conn.query(query, (error, res) => {
                console.log(error)
            })
        }
    })

    res.send(200)
})

app.post("/api/registration", (req, res) => {

    const query = `INSERT INTO \`players\` (\`login\`, \`password\`) VALUES ('${req.body.login}', '${req.body.password}')`

    conn.query(query, (error, res) => {
        console.log(error)
    })

    res.send(200)
})

app.get("/api/login",  (req, res) => {

    const query = `SELECT * FROM \`players\` WHERE \`login\` LIKE '${req.body.login}' AND \`password\` LIKE '${req.body.password}'`

    const isLogin = conn.query(query, (error, res) => {
        return res.length === 1
    })

    if (isLogin) {
        res.send(200)
    } else {
        res.send(423)
    }
})

app.listen(3001, () => {
    console.log("Сервер работает на порту 3001 ")
})