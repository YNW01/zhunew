$(function(){
    let ffff =[
           {昵称:111,加入时间:222,签名:333 ,ff:888},
           {昵称:444,加入时间:555,签名:666,ff:999}
       ]

       
           let tbody = document.querySelector('tbody')
        function ff(){
         for(let i = 0 ; i<ffff.length;i++){
                    let tr = document.createElement('tr')
                 tr.innerHTML=`
                <td>${ffff[i].ff}</td>
                <td>2016-11-29</td>
                 <td>人生就像是一场修行</td>
   
                `
                 tbody.appendChild(tr)
                }
        }
     $('.layui-btn').click(function(){
            ff()
         var jsonn =[
            {"昵称":111,"加入时":222,"签名":333},
            {"昵称":444,"加入时间":555,"签名":666}
        ]
      const gg = JSON.parse([
        {"昵称":111,"加入时":222,"签名":333},
        {"昵称":444,"加入时间":555,"签名":666}
    ])
        console.log(gg)
     })
       
   
   
       })
          
   


