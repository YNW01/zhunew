$(function(){
  
  layui.use('dropdown', function(){
    var dropdown = layui.dropdown
    dropdown.render({
      elem: '#demo2' //可绑定在任意元素中，此处以上述按钮为例
      ,data: [{
        title: 'OMST-L-M1.1参观规定'
        ,id: 100
        ,href: './home/耐切割式样制作sop模板.pdf'
        
        ,target: 'aaas' //新窗口方式打开 //新窗口方式打开
      },{
        title: 'OMST-L-M1.2实验室日常规范'
        ,id: 101
        ,href: './home/耐切割式样制作sop模板.pdf' //开启超链接
        ,target: 'aaas' //新窗口方式打开
      }]
      ,id: 'demo1'
      //菜单被点击的事件
      ,click: function(obj){
        console.log(obj);
        // layer.msg('回调返回的参数已显示再控制台');
      }
    });
  });
})

  
