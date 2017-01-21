/**
 * Created by 鱼鱼 on 2016/12/26.
 */
document.ready= function () {
    // !function() {

    // }();
}
$(function(){

    //导航菜单切换
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
        $(".basic").show();
        $(".basic_edit").hide();
        $("#detail").hide();
    });
    $("#aside_detail").click(function () {
        $("#basic").hide();
        $("#detail").show();
        $(".detail").show();
        $(".detail_edit").hide();
        // $("#aside_detail").animate({fontSize:"1.5em"});
        // $("#aside_basic").animate({fontSize:"1em"});
    });
});
 // 上传图片
$(function () {
    $(".icon").hover(function () {
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
var nickname ;
var email;
var phone_num;
$(function () {
    $.ajax({
        url: $.URL.user.getUserMainById,
        data:{
            main_id:1
        },
        type: "get",
        dataType:"json",
        success:function (return_data) {
            if (return_data.code != 1) {
                alert(return_data.message);
                return;
            }
            nickname = return_data.data.nickname;
            email = return_data.data.email;
            phone_num = return_data.data.phone_number;
            $("#lab_nickname").text(nickname);
            $("#lab_email").text(email);
            $("#lab_phone").text(phone_num);
            $("#input_nickname").val(nickname);
            $("#input_phone").val(phone_num);
            $("#input_email").val(email);
        }
    });
    $(".edit").click(function () {
        $("#detail").hide();
        $(".basic").hide();
        $(".basic_edit").show();
        $("#input_nickname").text($("#lab_nickname"));
        $("#input_phone").text($("#lab_phone"));
        $("#input_email").text($("#lab_email"));
    });
});
//编辑基本资料和详细资料
$(function () {
    $(".basic_back").click(function () {
        if(confirm("确定要离开吗")){
            $(".basic").show();
            $(".basic_edit").hide();
        }else{
            $(".basic_edit").reload();
        }
    });
    $(".basic_save").click(function () {

    });
    $(".editBtn").click(function () {
        $("#basic").hide();
        $(".detail").hide();
        $(".detail_edit").show();
        });
    // $("#birthday").click(function (e) {
    //     var ths = this;
    //     calendar.show({
    //         id: this, ok: function () {
    //             alert(ths.value);
    //         }
    //     });
    // });
    });