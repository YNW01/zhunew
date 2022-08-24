/* 引入express框架 */
const express = require('express');
var router = express.Router();
const app = express();
/* 引入cors */
app.use(express.static('./assets/ddddd'))


const session = require('express-session')
app.use(
  session({
    secret: 'omstkey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
  })
)


const cors = require('cors');
app.use(cors());
/* 引入body-parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));









/* 引入mysql */
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'omst',
    multipleStatements: true
})
conn.connect();
/* 监听端口 */
app.use(express.static('./assets'))

app.get('/', (req, res) => {
    res.send('<p style="color:red">服务已启动</p>');
})
//查
app.get('/api/getUserList', (req, res) => {
    const sqlStr = 'SELECT * FROM omstshuju'
    conn.query(sqlStr, (error, results) => {
        // if (error) return res.json({
        //     code: 404,
        //     message: error
        // })
        res.json({
            code: 200,
            data: results,
            affextedRows: results.affextedRows
        })
    })
});
//条件查找
app.get('/api/getUserListById/', (req, res) => {
    const id = req.query.id;
  
    const sqlStr = 'select * from omstshuju where id=?';
    conn.query(sqlStr, id, (err, results) => {
        // if (err) return res.json({
        //     code: 404,
        //    data: '数据不存在',
        //     affextedRows: 0
        // });
        
        res.json({
            code: 300,
            data: results,
            // affextedRows: results.affextedRows
        });
         console.log(id)
    })
});
app.get('/api/geListById/g/', (req, res) => {
    // const id = req.query.username;
  const  id = req.query.name;
    const sqlStr = `SELECT  * from omstshuju where username like ?`;
    conn.query(sqlStr, `%${id}%`, (err, results) => {
         if (err) return res.json({
             code: 404,
            data: '数据不存在',
             affextedRows: 0
         });
       
        res.json({
            code: 400,
           data: results,
            //affextedRows: results.affextedRows
           
        });
    console.log(id)

    })
});
app.get('/api/login', (req, res) => {
    const hhh = req.query.name
    console.log(hhh)
    const sqlStr = 'SELECT * FROM omstshuju WHERE `username` LIKE ?'
    conn.query(sqlStr,req.query.name,(error, results) => {
        if (error) return res.json({
             code: 404,
             message: error
         })
        res.json({
            code: 200,
            data: results,
            affextedRows: results.affextedRows
        })
    })
    
    
});
// app.post('/denghlu/login2', (req, res) => {
//     const ming = req.query.name;
//     const mima = req.query.mima;
//     console.log(req.body);
    
    
   
//     // const sqlStr = "insert into users(username,sex,address) values('" + username + "','" + sex + "','" + address + "')";
//     const sqlStr = 'SELECT * FROM omstshuju WHERE username=? and dizhi=? ', value = [ming, mima];
    
//     conn.query(sqlStr, value, (err, results) => {
//         if (err) return res.json({
//             code: 404,
//             message: err,
//             affectedRows: 0
//         });
        
//         res.json({
//             code: 200,
//             message: '成功',
//             affectedRows: results.affectedRows,
         
            
           
//         });
//         console.log(1)
//     })
// });
app.post('/denghlu/login3', (req, res) => {
    const ming = req.body.name;
    const mima = req.body.mima;
   const body = req.body
   
   if ( req.body.name !== 'omst' || req.body.mima !== 'omst') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
  req.session.userff = req.body // 用户的信息
  req.session.islogin = true // 用户的登录状态

  res.send({ status: 0, msg: '登录成功' })
      
  console.log(req.session.userff )
  
    
      
        
    
   
    
     
})
  app.get('/denghlu/login4', (req, res) => {
     // TODO_03：请从 Session 中获取用户的名称，响应给客户端
     console.log(req.session.islogin)
     if (!req.session.islogin) {
       return res.send({ status: 1, msg: 'ssssssssssssssssssss' }) 

     }
     res.send({      status: 0,
       msg: 'success',
      name: req.session.userff.name,
     })
   }),
   app.listen(3000, () => {
    console.log('——————————服务已启动——————————');
})
      
        
    
   
    
     
