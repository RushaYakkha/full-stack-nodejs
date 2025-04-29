//database  connection ko logic lekhincha yaha
const {Sequelize,DataTypes}=require("sequelize")//Destructure garekovanxa js ma

// const sequelize = require("sequelize")
// const Sequeluze = sequelize.Sequelize
// const DataTypes=sequelize.DataTypes

const sequelize=new Sequelize(process.env.cs)

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo,Connect Vayo!")
})
.catch((err)=>{
    console.log("Error ayou" +err)
})

const db ={}
db.Sequelize=Sequelize
db.sequelize=sequelize

module.exports=db