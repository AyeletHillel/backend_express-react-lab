// Import Dependencies
const express = require("express")
const cors = require("cors")

// Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

// Create our app object
const app = express()

// set up middleware
app.use(cors());

//home route for testing our app 
app.get("/", (req, res) => {
    res.send("Spread the love!")
})

app.get("/projects", (req, res) => {
    res.json(projects)
})

app.get("/about", (req, res) => {
    res.json(about)
})

const PORT = 3000

app.listen(PORT, () => console.log(`Can you feel the love on ${PORT}`))