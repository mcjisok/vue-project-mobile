window.onload = function(){
	$('.cate_left').find('li').eq(0).addClass('now');

	$('.cate_left').find('li').tap(function () {
		$(this).addClass('now').siblings().removeClass('now');

	})

	// 点击返回按钮返回上一页
	$('.icon_back').tap(function () {
		window.history.go(-1);
	})

}


