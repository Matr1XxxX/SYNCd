const express= require("express")
const app= express()
const path= require("path")
const hbs=require("hbs")
const tempelatePath=path.join(__dirname,"../tempelates")

app.use(express.json)
app.set("view engine","hbs")
app.set("views",tempelatePath)

app.listen(3000,()=>{
    console.log("port connected")
})
app.get("/",(req,res)=>{
    res.render("login")
})