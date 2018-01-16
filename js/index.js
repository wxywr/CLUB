$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});


//获取验证码	
	function Timer(id){
		var num = 30;
		var code = id;
		code.attr('disabled','disabled');
		// code.addClass('cur');
		var timer = setInterval(function(){
			num--;
			code.val(num+'秒后重新获取...');
			if(num==0){
				clearInterval(timer);
				code.removeAttr('disabled')
				code.val('获取验证码');
				// code.removeClass('cur');
			}
		},1000)
	}
	$('#btn').click(function(){
		var phone = $('.num').val();
		if(phone==''){
			alert('请输入手机号！');
			return false;
		}
		if(!(/^1[34578]\d{9}$/.test(phone))){
	        alert('手机号不正确！');
	        return false;
	    }
		var data = {
	        phoneNum : phone
	    };
	    //发送验证码
		$.post("",data,function(msg){
	        if(msg.status!=1){ 
	            alert(msg.msginfo);
	            return false;
	        }
	    })
		Timer($('#btn'));
	})


// 表单提交验证
	$('#lg').click(function(){
		var phone = $('.num').val();
		var code = $('.test').val();
		if(phone==''){
			alert('手机号不能为空！');
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('手机号不正确！');
			return false;
		}
		if(code==''){
			alert('验证码不能为空！');
			return false;
		}
		window.location.href = "personal.html";
		$.ajax({
			type : "post",
			url : " ",
			data : {
				"phone": phone, 
				"code": code,
			},
			success : function(data) {
				// window.location.href = "";
			},
			error : function() {

				alert(验证码错误);

			}
		});

	})


// 订单确认验证
	$('.referTo .fr input').click(function(){
		var name = $('.names').val();
		var phone = $('.phones').val();
		var addr = $('.addrs').val();

		if(name==''){
			alert('请输入收货人姓名！');
			return false;
		}
		if(phone==''){
			alert('请输入收货人联系电话！');
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('手机号不正确！');
			return false;
		}
		if(addr==''){
			alert('请输入详细地址！');
			return false;
		}
		// window.location.href = "ispay.html";
			
		$.ajax({
			type : "post",
			url : " ",
			data : {
				"name": name,
				"phone": phone, 
				"addr": addr,
			},
			success : function(data) {
				// if(data=='true'){  //如果信息合法就跳转页面
					window.location.href = "ispay.html";
				// }else{
				// 	alert("信息不合法！");
				// }
			},
			error : function() {
				
			}
		});


	})


    function wInput(){
        var findObj = $(".obj").find("input:checked");
        $(".addSit").html("");
        $.each(findObj,function(i,n){
            $(".addSit").append("<div>"+findObj.eq(i).val().replace("a","排")+"座"+" <i id=\"del_"+findObj.eq(i).val()+"\"></i></div>");
        });
        delHtml();
    }

    $(".row").each(function(){
        $(this).click(function(){

            if($(".row:checked").length > 4){
            	$('.alert').fadeIn().delay(1500).fadeOut();
            	return false;
            }

			select();

			var size = $(".row:checked").length;
        	$('.before .many').text(size);

            wInput();

            total();
        });
    });

 // 删除选座
     function delHtml(){
        $("[id^=del_]").each(function(){
            $(this).click(function(){
            	 var ids = $(this).attr("id").split("_"); //拆分字符串，返回一个数组
                 $("#site_"+ids[1]).prop("checked",false);

                $(this).parent().remove();

				select();

				var size = $(".row:checked").length;
        		$('.before .many').text(size);

        		total();

            })
        })
    }

    wInput();


// 购票总价格
    function total(){
    	var size = $(".row:checked").length;
   	 	var p = Number($('.before .dj').html());
   	 	var all = p*size;
   	 	$('.before big').text(all);
    }

    total();

//判断有没有选座
    function select(){
    	if(!$("input[type='checkbox']").is(':checked')){  
    		$('.before .sure').attr('disabled',true).css('opacity','0.6'); 
    		$('.before .sure').val('请先选座');
		}else{  
	    	$('.before .sure').attr('disabled',false).css('opacity','1'); 
	    	$('.before .sure').val('确认选座');
		} 
    }

    select();

    $('.before .sure').click(function(){
    	window.location.href = "orderConfirm.html";
    })


    // 优惠券切换
	var n=0;
	$('.coupon-tit li').click(function(){
		var index = $(this).index();
		n=index;
		tab();
	})
	function tab(){
		$('.coupon-tit li').eq(n).addClass('on').siblings().removeClass('on');
		$('.coupon-wrap div').eq(n).css('display','block').siblings().css('display','none'); 
	}


});