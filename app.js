const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("This is the home page")
})

app.get("/bugs", (req, res) => {
    // let amtOfBugs = 99
    res.send(`<p>
            99 little bugs in the code
            <br />
            <a href="/bugs/195">pull one down, patch it around</a>
        </p>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    let { numberOfBugs } = req.params
    if(numberOfBugs < 200){
        res.send(`<p>
            ${numberOfBugs} little bugs in the code
            <br />
            <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around</a>
        </p>`)
    } else {
        res.send(`<p>
        ${numberOfBugs} little bugs in the code
        <br />
        <a href="/bugs">Start Over!</a>
        </p>`)
    }
})

module.exports = app