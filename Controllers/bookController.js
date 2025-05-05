const { books } = require("../database/connection")

exports.fetchBook = async function(req,res){
    //logic to fetch book from database
    const datas=await books.findAll()//findAll()le select * from books gare jastae hoo->Jaile return arraymai garxa ,await =>khi request time lagne vaye,await garda function ma async pani add garnai parcha
    res.json({
        message :"Book Fetched Successfully",
        datas : datas //yeslai direct 'datas' matra lekhda ni hunxa jaba key : value same vako casema
    })
}

exports.addBook = async function(req,res){
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
}

exports.deleteBook = function(req,res){
    //logic to delete book from database

    res.json({
        message :"book deleted successfully"
    })
}

exports.updateBook = function(req,res){
    //logic to update data on database

    res.json({
        message : "Book Updated successfully"
    })
}

exports.singleFetchBook = async function(req,res){
    //logic to update data on database
    const id = req.params.id
    const datas = await books.findByPk(id)


    res.json({
        message : "single Book fetched successfully",
        datas : datas
    })
}



// module.exports = {fetchBook,addBook,deleteBook,updateBook}->method-1 to export
// next method vaneko export garnalai const ko replace exports le garne