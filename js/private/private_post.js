$(function(){
    let data;
    var inputBox = document.getElementById("inputBox")
    inputBox.onchange = function(){
    var reader = new FileReader()
    reader.readAsDataURL(this.files[0])
    reader.onload = function(){
    	// 将 “data:image\/png;base64,”前缀去除掉，然后将图片的base64编码通过 post请求发送给服务器
        var data = reader.result.replace(/^data:image\/png;base64,/g,"")
        $.ajax({
            url:"http://192.168.1.5:5000/private/post",
            data:{base:data},
            async:false,//是否是异步请求
            cache:false,//是否缓存结果
            type:"post",//请求方式
            dataType:"json",//服务器返回什么类型数据 text xml javascript json(javascript对象)
            success:function(result){//函数会在服务器执行成功后执行，result就是服务器返回结果
                
            }
        });
    }
}
});