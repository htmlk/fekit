var $=require('../libs/jquery.js');

module.exports=function(){

    $.ajax({
      url:'/api/getIndexList',
      type:'get',
      success:function(res){
        console.log(res);
        var str="";
        $.each(res.data,function(index,value){
          str+="<li>"+value+"</li>";
          //console.log(value);
          $('.body ul').html(str);
        })
      },
      error:function(msg){
        console.log(msg);
      }

    })

}
