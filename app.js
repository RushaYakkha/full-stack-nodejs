let express = require('express')
let app = express()
//let app=require('express')()

// app.listen(3000,function(){
//     console.log("server/project has started at port 3000")



//     app.get("/",(req,res)=>{
//         res.json ({
//             name:"Rusha",
//             address: "Dhankuta"
//         })
//     });


        
//     app.get("/About",(req,res)=>{
//         res.json({
//             about:"This is About Page"
//         })});




//         app.get("/contact",(req,res)=>{
//             res.json ({
//                contact : "This is Contact Page"
//             })
//         });


//})

require("./database/connection")//import gareko connection.js file lai
app.get("/books",function(req,res){
    //logic to fetch book from database

    res.json({
        message :"Book Fetched Successfully"
    })
})


app.post("/books",function(req,res){
    //logic to insert book in database

    res.json({
        message:"Book added successfully"
    })
})

app.delete("/books/:id",function(req,res){
    //logic to delete book from database

    res.json({
        message :"book deleted successfully"
    })

    app.patch("/books/:id",function(req,res){
        //logic to update data on database

        res.json({
            message : "Book Updated successfully"
        })
    })
})

postgresql://postgres.ceyvryhctklokhkqxyww:supabase246810@aws-0-ap-south-1.pooler.supabase.com:6543/postgres //connection stringSSSSSSSSS




app.listen(4000, function(){
    console.log("Project has started at port 4000")
})



