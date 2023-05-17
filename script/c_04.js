$(function(){
    // 서브 메뉴
    $('.gnb>li').hover(function(){
        $(this).find('ul').stop().fadeIn()
    }, function(){
        $(this).find('ul').stop().fadeOut()
    })

    // 좌우 슬라이드
    setInterval(function(){
        $('.slide').animate({left: -800}, 'slow', function(){
            $('.slide img:first').appendTo($('.slide'))
            $('.slide').css('left', 0)
        })
    }, 2700)

    // 모달 팝업
    $('.notice ul li:first').click(function(){
        $('#modal').addClass('popUp')
    })
    $('.close').click(function(){
        $('#modal').removeClass('popUp')
    })
})