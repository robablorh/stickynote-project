const express = require("express");
const fs = require("fs")

const app = express()

app.get("../api/sticky.js", (req, res) => {
    try {
        const jsonData = fs.readFileSync("../sticky.json")
        const data = JSON.parse(jsonData)
        res.json(data)
        
    } catch (error) {
        console.error("Error reading json file ",error )
        res.status(500).json({error:"failed to read data"})
    }
})

module.exports = app