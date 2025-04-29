//database  connection ko logic lekhincha yaha
const {Sequelize,DataTypes}=require("sequelize")//Destructure garekovanxa js ma

// const sequelize = require("sequelize")
// const Sequeluze = sequelize.Sequelize
// const DataTypes=sequelize.DataTypes

const sequelize=new Sequelize("postgresql://postgres.ceyvryhctklokhkqxyww:Supabase246810@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

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