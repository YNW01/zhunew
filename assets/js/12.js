



let db = require('./mysql')
const sql1 = 'select * from omstshuju'

db.query(sql1 ,(err,result)=>{
        if (err)return console.log(err.message)
        console.log(result)
     })



















