// const { sequelize } = require("../connection");

//book:db columns->bookName,bookPrice,bookAuthor,bookGenre
const bookModel=(sequelize,DataTypes)=>{
    const Book=sequelize.define("books",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
        
        },
        bookAuthor : {
            type : DataTypes.STRING,
            defaultValue : "Unknown Author"
        },
        bookGenre : {
            type : DataTypes.STRING,
            allowNull : false
        }

    })
    return Book
}
module.exports = bookModel