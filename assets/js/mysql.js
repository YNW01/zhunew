const mysql = require('mysql')


const db = mysql.createPool({
    host:'127.0.0.1' ,
    user:'root',
    password :'admin',
    database:'omst'
})



const sql1 = 'select * from omstshuju'


db.getConnection((err)=>{
    if (err)return console.log(err.message)
    console.log('mysql')
})
   db.query(sql1 ,(err,result)=>{    
        if (err)return console.log(err.message)
     console.log(result)
    //  reslove(result)
 })


module.exports =db

