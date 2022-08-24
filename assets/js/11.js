$.ajax({
  type: 'get',
  url: 'http://localhost:3000/user',
  data: {
      username: 'admin'
  },
  dataType: 'json',
  success: function(res) {
      console.log(res);
  },
  error: function(err) {
      console.log(err)
  }
});

$.ajax({
  type: 'post',
  url: 'http://localhost:3000/user',
  data: {
      username: 'admin'
  },
  dataType: 'json',
  success: function(res) {
      console.log(res);
  },
  error: function(err) {
      console.log(err)
  }
});
app.get('/api/getUserListById/:id', (req, res) => {
    const id = req.params.id;
    const sqlStr = 'select * from omstshuju where id=?';
    conn.query(sqlStr, id, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: '数据不存在',
            affextedRows: 0
        });
        res.json({
            code: 200,
            message: results,
            affextedRows: results.affextedRows
        });
    })
});
