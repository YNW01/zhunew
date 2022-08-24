router.post('/demo', (req, res, next)=> {
    console.log(req.body)
    let name = req.body.name
    let pageSize = req.body.pageSize // 页大小
    let pageCurrent = req.body.pageCurrent // 当前页
    let start=(pageCurrent-1)*pageSize; // 起始位置
    connection.query(`SELECT *  FROM student_info WHERE name LIKE '%${name}%' LIMIT ${start},${pageSize}`,function(err,result){
      if(err) throw err;
      let list = result
      connection.query(`SELECT COUNT(*) AS total FROM student_info`,function(err,result1){
        if(err) throw err;
        console.log(result1[0].total)
        let obj = {
          pageSize: pageSize,
          pageCurrent: pageCurrent,
          total:result1[0].total,
          list: list
        }
  
        res.send(obj);
      })
    })
  });
  