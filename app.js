const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res) => {
    res.send(`
        <p>
            99 little bugs in the code
            <br />
            <a href="/bugs/195">Pull one down, patch it around</a>
        </p>
    `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    let { numberOfBugs } = req.params
    if(numberOfBugs < 200){
        res.send(`
            <p>
                ${numberOfBugs} little bugs in the code
                <br />
                <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
            </p>
        `)
    } else {
        res.send(`
        <p>Too many bugs!! Start over!</p>
        <a href="/bugs">Start Again</a>
        `)
    }
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    let foundPoke = pokemon.filter(poke => poke.name.toLowerCase() === name.toLowerCase())
    
    if (foundPoke.length > 0) res.send(foundPoke)
    else res.send([])
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]) res.send(pokemon[indexOfArray])
    else res.send(`Sorry, no pokemon found at ${indexOfArray}`)
})


module.exports = app