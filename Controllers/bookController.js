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
    const {bookName,bookPrice,bookAuthor,bookGenre}=req.body
       await books.create({
            bookName,
           bookPrice ,
            bookAuthor,
            bookGenre
        })
    
    res.json({
        message:"Book added successfully"
    })
}

exports.deleteBook = async function(req,res){
    //logic to delete book from database
    //first ma hami kun book delete garna lageko tesko id linxam
    const id = req.params.id 

    //id paiesakk paxi tyo id ko book chai table bata udaie diney
    await books.destroy({
        where : {
            id
        }
    })
    res.json({
        message :"book deleted successfully"
    })
}

exports.updateBook = async function(req,res){
    //logic to update data on database
    //first kun id ko update garne typo linu paryo
    const id = req.params.id
    //kk update garne vanne chaiyo
    const {bookName,bookPrice,bookAuthor,bookGenre}=req.body
   await books.update({bookName : bookName,bookAuthor : bookAuthor,bookPrice:bookPrice,bookGenre:bookGenre},{
        where :{
            id : id
        }
    })

    res.json({
        message : "Book Updated successfully"
    })
}
exports.singleFetchBook = async function(req, res) {
    try {
        const id = req.params.id;

        // Validate ID
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const book = await books.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({
            message: "Single book fetched successfully",
            data: book
        });
    } catch (error) {
        console.error("Error fetching single book:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
