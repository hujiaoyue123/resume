/**
 * Created by Administrator on 2017/5/20.
 */


$(function () {
    //logo旁边文字变换
    $('#header-p').mouseover(function () {
        $('#header-p').find('.p1').html('Resume');
        $('#header-p').find('.p2').html('前端工程师');
    }).mouseout(function () {
        $('#header-p').find('.p1').html('F2E');
        $('#header-p').find('.p2').html('个人简历');
    });
    //skill
    $(".skill_icon").click(function () {
        $(".skill_int").each(function () {
            if ($(this).is(":visible")) {
                $(this).slideUp(200);
                $(this).prev().removeClass("skill_flag_scale");
            }
        });
        if ($(this).siblings(".skill_int").is(":hidden")) {
            $(this).siblings(".skill_int").slideDown(400);
            $(this).siblings(".skill_flag").addClass("skill_flag_scale");
        } else {
            $(this).siblings(".skill_int").slideUp(200);
            $(this).siblings(".skill_flag").removeClass("skill_flag_scale");
        }
    });
   // 轮播图
    var $ul=$('.exp-list-con');
    var $li=$ul.find('li');
    var index=0;
    var derection='left';
    $('#arrow-left').click(function () {
        change($ul,derection);
    });
    $('#arrow-right').click(function () {
        change($ul);
    });
    function change(opt,derection) {
        if(derection=='left'){
            index--;
            if(index<0){
                index=0
            }
        }else {
            index++;
            if(index>$li.length-1){
                index=$li.length-1
            }
        }
        opt.animate({marginLeft:-index*$li.width()},700)
    }
})
