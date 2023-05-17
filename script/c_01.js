$(function(){
    // 서브 메뉴
    $('.gnb>li').hover(function(){
        $(this).find('ul').stop().slideDown()
        $(this).find('a:first').css('padding-bottom', '150px')
    }, function(){
        $(this).find('ul').stop().hide()
        $(this).find('a:first').css('padding-bottom', '20px')
    })

    // 슬라이드 Fade
    var index = 0
    $('.slide a').eq(index).show()
    setInterval(function(){
        var nextIndex = (index +1 ) % 3
        $('.slide a').eq(index).fadeOut('slow')
        $('.slide a').eq(nextIndex).fadeIn('slow')
        index = nextIndex
    }, 2700)

    // 탭 전환
    $('.tab_tit h3').click(function(){
        $('.tab_tit h3.on').removeClass('on')
        $(this).addClass('on')

        $('.tab_cont ul').css('display', 'none')
        $('.tab_cont ul').eq($(this).index()).css('display', 'block')
    })

    // 모달 팝업
    $('.notice li:first').click(function(){
        $('#modal').addClass('popUp')
    })
    $('.close').click(function(){
        $('#modal').removeClass('popUp')
    })
})