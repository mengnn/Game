
$(function(){
    $('.carousel').carousel({  interval: 2000});
    $('.tab-hd a').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var id=$(this).attr('href');
        $(id).addClass('active').siblings('.active').removeClass('active');
    });

//    场景转换
    $('.menu').on('click','a',function() {
        $('body').css('background','none');
        var i = $('.menu a').index(this);
        console.log(this);
        var page = $('section.pa')[i];
        if ($('section')[i] == $('section.pr')[0]) {
            console.log(123);
            $('section.pr').addClass('activex').siblings().removeClass('activex')
            $('section.pr').css('top', '1200px');
            $('section.pr').animate({top: '440px',}, 500);
            $('.download').css('display', 'none');
            $('body').css('background','url("img/beijing.PNG") no-repeat');
            $('.menu .m4').css('background','url("img/nav.png") no-repeat 0px -248px');
        } else{
            switch (i){
                case 0:
                    $('body').css('background','url("img/00.jpg") no-repeat');
                    //$(this).css('background','url("img/nav.png") no-repeat 0px 0px');
                    break;
                case 1:
                    $('body').css('background','url("img/11.jpg") no-repeat');
                    //$(this).css('background','url("img/nav.png") no-repeat 0px -62px');
                    break;
                case 2:
                    $('body').css('background','url("img/22.jpg") no-repeat');
                    //$(this).css('background','url("img/nav.png") no-repeat 0px -124px');
                    break;
                case 3:
                    $('body').css('background','url("img/33.jpg") no-repeat');
                    //$(this).css('background','url("img/nav.png") no-repeat 0px -186px');
                    break;
            }
            $(page).addClass('activex').siblings().removeClass('activex');
            $(page).css('top', '1200px');
            $(page).animate({top: '0px',}, 1000);
            $('.download').hide('explode',500);
            $('.download').show('explode',500);
        }
    })


/******************************没实现功能****************************/
    $('.top-r a').click(function(){
        alert("该功能暂时没开放！")
    })

})











