const express = require("express")
const path = require("path")
const rule_engine = require('./rules/rules')

const app = express()

app.set('view engine', 'ejs')

app.use("/static", express.static(path.resolve(__dirname, "views", "static")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req,res) => {
    res.render('index')
})

app.post("/submit-facts", async (req,res) => {
    //console.log(req.body)
    try{
        await rule_engine.run(req.body)
        .then((r) => {
            //rule-engine can either return an array / empty array of events
            //handle empty array di ui
            res.send(r.events)
        })
    }catch(e){
        console.log(e)
    }
})

const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`Server is running on port: ${port} `)
})