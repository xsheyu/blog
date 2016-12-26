/**
 * Created by 鱼鱼 on 2016/12/26.
 */
// window.onload=function  () {
//     var aside_basic=document.getElementById("aside_basic");
//     var aside_detail=document.getElementById("aside_detail");
//     var basic1=document.getElementById("basic");
//     var detail1=document.getElementById("detail");
//     basic.onclick=function () {
//         basic1.setid("")
//     }
// };
jQuery(function () {
    jQuery("#aside_basic").click(function () {
        jQuery("#basic").show();
        jQuery("#detail").hide();
    });
    jQuery("#aside_detail").click(function () {
        $("#basic").hide();
        $("#detail").show();
    });
})