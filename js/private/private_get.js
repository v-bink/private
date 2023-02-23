$(function(){
    $.ajax({
        url:"http://127.0.0.1:5000/test_1.0",//要请求的服务器url
        data:{name:'小钟',age:20},//第一个name对应的是后端request.getParameter("name")的name、第二个name对应的是此js中的var name = $("#name").val();的name
        async:true,//是否是异步请求
        cache:false,//是否缓存结果
        type:"get",//请求方式
        dataType:"json",//服务器返回什么类型数据 text xml javascript json(javascript对象)
        success:function(result){//函数会在服务器执行成功后执行，result就是服务器返回结果
            console.log(result);	  
        }
    });
});