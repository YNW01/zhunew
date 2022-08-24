$(function(){

$('#link_reg').on('click' , function(){
    $('.loginBox2').hide()
    $('.regBox').show()
    
})

$('#link_login').on('click' , function(){
    $('.regBox').hide()
    $('.loginBox2').show()
    
})

let form = layui.form
let  ll =layui.layer
form.verify({
    ppd:[
        /^.{3,20}$/
        ,'长度为3-20的所有字符'

    ],
    ppd2 :function(value){
        let pss = $('.regBox [name=password]').val()
       
        if (value!== pss){
            return '密码不一致';
        }

    }
})


$('#regBox22').on('submit' , function(e){
    e.preventDefault()
    $.post(
        'http://www.liulongbin.top:3007/api/reguser',{
            username:$('.regBox [name=username]').val() , password:$('.regBox [name=password]').val()
        },function(res){
            if(res.status !== 0){
                
                return layui.layer.msg(res.message);
            }
            layui.layer.msg('cg')
           $('#link_login').click()
        }
    )
})


$('#loginBox22').submit(function(e){
    e.preventDefault()
    $.ajax({
        url:'http://www.liulongbin.top:3007/api/login',
        method: 'post',
        data:$(this).serialize(),
        success: function(res){
            if (res.status!== 0){
                return layui.layer.msg('sbai')
            }
            layui.layer.msg('suxccc')
            console.log(res.token)
            localStorage.setItem('shuju' , res.token)
            location.href='/index.html'
        }
        
    })
})


})