$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
	
	$('body').css('overflow-x','hidden');
	// 缩小
	$('.btn1 img').bind('click',function(){
		$('.mask').addClass('mask-css3');
		$('.wrap').addClass('wrap-css3');
		$('.logo').addClass('logo-css3');
		$('.btn2').addClass('btn2-css3');
		$('.btn1').addClass('btn1-css3');
		$('.swiper-pagination').addClass('none');
		$('.bottom').addClass('none');
	})

	// 放大
	$('.btn2').bind('click',function(){
		$('.mask').removeClass('mask-css3');
		$('.wrap').removeClass('wrap-css3');
		$('.logo').removeClass('logo-css3');
		$('.btn2').removeClass('btn2-css3');
		$('.btn1').removeClass('btn1-css3');
		$('.swiper-pagination').removeClass('none');
		$('.bottom').removeClass('none');
	})


	var swiper = new Swiper('.box .swiper-container', {
		slidesPerView: 1,
		centeredSlides: true,
		autoplay: {
		    delay: 5000,//5秒切换一次
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
    });

    var swiper = new Swiper('.car_wrap .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 10,
		freeMode: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
    });



    // 日历特效
    $('.bottom').click(function(){
    	// $('.con_wrap').slideDown(400);
        var t = $('.con_wrap').offset().top;
        $('body,html').animate({"scrollTop":t},800);
    })
    $('.go_top').click(function(){
    	$('body,html').animate({'scrollTop':0},800);
    	// $('.con_wrap').slideUp(400);
    })

    var mySchedule = new Schedule({
		el: '#schedule-box',
	});
})