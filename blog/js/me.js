/**
 * Created by 鱼鱼 on 2016/12/26.
 */
//导航菜单切换
$(function(){
    $(".nav").click(function () {
        $(" .nav ").removeClass(" click_a");
        $(this).addClass(" click_a");
    });
});

// 资料切换原生js
// window.onload=function  () {
//     var aside_basic=document.getElementById("aside_basic");
//     var aside_detail=document.getElementById("aside_detail");
//     var basic1=document.getElementById("basic");
//     var detail1=document.getElementById("detail");
//     aside_basic.onclick=function () {
//        basic1.style="";
//         detail1.style="display:none";
//     }
//     aside_detail.onclick=function () {
//         basic1.style="display:none";
//         detail1.style="";
//     }
// };
/**资料切换
 * **/
$(function () {
    $("#aside_basic").click(function () {
        $("#basic").show();
        $("#detail").hide();
        // $("#aside_basic").animate({fontSize:"1.5em"});
        // $("#aside_detail").animate({fontSize:"1em"});

    });
    $("#aside_detail").click(function () {
        $("#basic").hide();
        $("#detail").show();
        // $("#aside_detail").animate({fontSize:"1.5em"});
        // $("#aside_basic").animate({fontSize:"1em"});
    });
});
 // 上传图片
$(function () {
    $("img").hover(function () {
        $(".upload").show();
    },function () {
        $(".upload").hide();
    });
    $(".upload").click(function () {
        $(".select").click();
    });
});




var image = '';
function selectImage(file){
    if(!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function(evt){
        document.getElementById('image').src = evt.target.result;
        image = evt.target.result;
    }
    reader.readAsDataURL(file.files[0]);
}
function uploadImage(){

    $.ajax({

        type:'POST',

        url: 'ajax/uploadimage',

        data: {image: image},

        async: false,

        dataType: 'json',

        success: function(data){

            if(data.success){

                alert('上传成功');

            }else{

                alert('上传失败');

            }

        },

        error: function(err){

            alert('网络故障');

        }

    });

}