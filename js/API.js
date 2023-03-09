$(function(){
    $.ajax({
        url:"https://70i463146e.zicp.fun/private/get",//要请求的服务器url
      //  data:{name:'小钟',age:20},//第一个name对应的是后端request.getParameter("name")的name、第二个name对应的是此js中的var name = $("#name").val();的name
        async:false,//是否是异步请求
        cache:false,//是否缓存结果
        type:"get",
        dataType:"json",//服务器返回什么类型数据 text xml javascript json(javascript对象)
        success:function(result){
            var img = new Image();//添加img容器
            $('body').append(img)
            $('body img').addClass('img_get')
            img.src = `data:png/jpeg;base64,${result.data}`; //img图片路径
        }
    });
});