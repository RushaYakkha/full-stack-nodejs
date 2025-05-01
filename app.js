let express = require('express')
const { books } = require('./database/connection')
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
app.use(express.json())
app.get("/books",async function(req,res){
    //logic to fetch book from database
    const datas=await books.findAll()//findAll()le select * from books gare jastae hoo->Jaile return arraymai garxa ,await =>khi request time lagne vaye,await garda function ma async pani add garnai parcha
    res.json({
        message :"Book Fetched Successfully",
        datas : datas //yeslai direct 'datas' matra lekhda ni hunxa jaba key : value same vako casema
    })
})


app.post("/books",async function(req,res){
    //logic to insert book in database
    // console.log(req.body)
    const {bookName,price,bookAuthor,bookGenre}=req.body
       await books.create({
            bookName,
           bookPrice : price,
            bookAuthor,
            bookGenre
        })
    
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



