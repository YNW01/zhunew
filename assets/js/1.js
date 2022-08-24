const express = require('express');
const app = express();


var bodyParser = require('body-parser');
app.use(bodyParser());
//配置body-parser中间件
// parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
const handleDB = require('./3');










// 查询所有用户信息
app.get('/queryAll', function (req, res) {
  const data = req.query
  const date = (11)
    res.send(data);
    res.send(date);

})



const server = app.listen(8080, function () {
  console.log('Express app server listening on port %d', server.address().port);
});
