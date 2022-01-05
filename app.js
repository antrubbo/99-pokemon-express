const express = require("express")
const app = express()
const pokemon = require("./models/pokemon.json")

// app.get("/", (req, res) => {
//     res.send("This is the home page")
// })

// app.get("/bugs", (req, res) => {
//     // let amtOfBugs = 99
//     res.send(`<p>
//             99 little bugs in the code
//             <br />
//             <a href="/bugs/195">pull one down, patch it around</a>
//         </p>`)
// })

// app.get("/bugs/:numberOfBugs", (req, res) => {
//     let { numberOfBugs } = req.params
//     if(numberOfBugs < 200){
//         res.send(`<p>
//             ${numberOfBugs} little bugs in the code
//             <br />
//             <a href="/bugs/${Number(numberOfBugs) + 2}">pull one down, patch it around</a>
//         </p>`)
//     } else {
//         res.send(`<p>
//         ${numberOfBugs} little bugs in the code
//         <br />
//         <a href="/bugs">Start Over!</a>
//         </p>`)
//     }
// })

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    let capLetter = name[0].toUpperCase()
    let formattedName = capLetter + name.slice(1)
    let foundPoke = pokemon.find(poke => poke.name === formattedName)
    
    if (foundPoke) res.send(foundPoke)
    else res.send("No Pokemon found!")
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]) res.send(pokemon[indexOfArray])
    else res.send(`Sorry, no pokemon found at /pokemon/${indexOfArray}`)
})


module.exports = app