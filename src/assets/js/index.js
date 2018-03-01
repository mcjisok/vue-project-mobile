window.onload = function(){
	var mySwiper = new Swiper('.jd_banner', {
		direction: 'horizontal',
		autoplay:3000,	
		autoplayDisableOnInteraction: false,	
		loop: true,
		pagination: '.swiper-pagination',
		autoHeight: true,
		
	}) 

	$(window).resize(function () {
		var h = $(".swiper-slide").find("img").height();
		$(".swiper-wrapper,.swiper-slide").css("height", h)
	})
	// 禁止屏幕滑动
	// document.ontouchmove = function (e) {
	// 	e.preventDefault();		
	// }
	// 初始化页面功能
	// 搜索
	search();
	// 轮播图
	//banner();
	
	
	// 倒计时
	downTime();
}

var search = function(){
	// 1、页面初始化的时候，距离顶部距离为0的时候 透明度为0
	// 2、当页面滚动时，随距离变大 透明度变大
	// 3、当滚动的距离超过了轮播图的距离的时候 透明度保持不变
	var search = document.querySelector('.jd_search_box');
	var banner = document.querySelector('.jd_banner');
	var height = banner.offsetHeight;//距离范围

	// 监听滚动事件
	window.onscroll = function(){
		var top = document.body.scrollTop;//谷歌
		//var top = document.documentElement.scrollTop;//IE
		var opacity = 0;
		// 计算透明度
		if(top > height){
			// 3、当滚动的距离超过了轮播图的距离的时候 透明度保持不变
			
			opacity = 1;
		}else{
			// 2、当页面滚动时，随距离变大 透明度变大
			opacity = 1*(top/height)
		}

		// 设置颜色给搜索盒子
		search.style.background = 'rgba(216,80,92,'+opacity+')'
	}
}

// var banner = function(){
// 	/*
// 	1、无缝滚动和无缝滑动（定时器 过度 唯一）
// 	2、点盒子跟随改变（改变当前样式 now）
// 	3、可以滑动（touch事件 监听触摸点坐标改变距离 位移）
// 	4、当滑动距离不够时，吸附回去（过度位移）
// 	5、当滑动距离够了的时候 跳转 上一张 下一张（判断方向 过度 位移）
// 	*/

// 	/*大容器*/
// 	var banner = document.querySelector('.jd_banner');
// 	var width = banner.offsetWidth;/*轮播图宽度*/
// 	/*图片容器*/
// 	/*querySelector用的选择器就是css当中的有效选择器*/
// 	var imagesBox = banner.querySelector('ul:first-child')
// 	/*点容器*/
// 	var pointBox = banner.querySelector('ul:last-child')
// 	/*所有的点*/
// 	var points = pointBox.querySelectorAll('li');

// 	/*提公用方法*/
// 	/*加过渡*/
// 	var addTransition = function(){
// 		imagesBox.style.transition = 'all 0.2s';
// 		imagesBox.style.webkitTransition = 'all 0.2s'/*兼容*/
// 	}
// 	/*清除过渡*/
// 	var removeTransition = function(){
// 		imagesBox.style.transition = 'none';
// 		imagesBox.style.webkitTransition = 'none'/*兼容*/
// 	}
// 	/*设置位移*/
// 	var setTranslateX = function(translateX){
// 		imagesBox.style.transform = 'translateX('+translateX+'px)';/*当前屏幕的宽度*/
// 		imagesBox.style.webkitTransform = 'translateX('+translateX+'px)';/*当前屏幕的宽度*/
// 	}
	
// 	/*	1、无缝滚动和无缝滑动（定时器 过度 唯一）*/
// 	var index = 1;//默认索引
// 	var timer = setInterval(function(){
// 		index ++;
// 		/*过度*/
// 		addTransition();
// 		/*位移*/
// 		setTranslateX(-index*width)

// 	},2000)

// 	/*监听过度结束这个时间点 过度结束事件*/
// 	imagesBox.addEventListener('transitionend',function(){
// 		/*无缝滚动*/
// 		if(index >= 10){
// 			//*瞬间定位到第一张图*/
// 			index = 1;
// 			/*清除过渡*/
// 			removeTransition();

// 			/*定位*/
// 			setTranslateX(-index*width)
// 		}
// 		/*无缝滑动*/
// 		else if(index <= 0){
// 			/*瞬间定位到第五张*/
// 			index = 9;
// 			removeTransition();

// 			/*定位*/
// 			setTranslateX(-index*width)

// 		}
// 		setPoint();
// 	});

// 	/*2、点盒子跟随改变（改变当前样式 now）*/
// 	var setPoint = function(){
// 		/*去除所有的now样式*/
// 		for(var i = 0;i< points.length; i++){
// 			points[i].classList.remove('now')
// 		}

// 		/*给对应的加上now样式*/
// 		points[index-1].classList.add('now')
// 	}

// 	/*3、可以滑动（touch事件 监听触摸点坐标改变距离 位移）*/
// 	var startX = 0;
// 	var distanceX;

// 	/*严谨判断*/
// 	var isMove =false;

// 	imagesBox.addEventListener('touchstart',function(e){
// 		clearInterval(timer);
// 		/*记录开始的位置*/
// 		startX = e.touches[0].clientX;	
// 		//禁止默认事件 
// 		imagesBox.ontouchmove = function (e) {
// 			e.preventDefault();
// 		}
// 	});

// 	imagesBox.addEventListener('touchmove',function(e){
// 		/**/
// 		var moveX = e.touches[0].clientX;
// 		// console.log(moveX);
// 		// console.log(moveX-startX)
// 		distanceX = moveX - startX;
// 		/*distanceX >0的时候向右滑动*/
// 		/*distanceX <0的时候向左滑动*/

// 		/*滑动*/
// 		/*基于当前位置*/
// 		translateX = -index*width + distanceX;
// 		/*清除过渡*/
// 		removeTransition();
// 		/*做定位*/
// 		setTranslateX(translateX)
// 		isMove = true;

		
// 	});

// 	imagesBox.addEventListener('touchend',function(e){
// 		/*滑动事件结束之后来判断当前滑动的距离*/
// 		/*有一个范围  如果大于三分之一切换图片  反之吸附（定位回去）*/
// 		console.log(distanceX);
// 		if(isMove){
// 			if(Math.abs(distanceX) < width/3){
// 				/*4、当滑动距离不够时，吸附回去（过度位移）*/
// 				/*过渡*/
// 				addTransition();
// 				/*位移*/
// 				setTranslateX(-index*width);
// 			}else{
// 				/*5、当滑动距离够了的时候 跳转 上一张 下一张（判断方向 过度 位移）*/
// 				if(distanceX > 0){
// 					index--;

// 				}else{
// 					/*向左滑 下一张*/
// 					index++
// 				}
// 				/*过渡*/
// 				addTransition();
// 				/*定位*/
// 				setTranslateX(-index*width)
// 			}
// 		}

// 		/*加上定时器*/
// 		clearInterval(timer);
// 		timer = setInterval(function(){
// 			index ++;
// 			/*过度*/
// 			addTransition();
// 			/*位移*/
// 			setTranslateX(-index*width)
// 		},2000);

// 		/*重置参数*/
// 		startX = 0;
// 		distanceX = 0;
// 		isMove = false;

// 	})

// }

var downTime = function(){
	var time = 60*60*11;

	var skTime = document.querySelector('.sk_time');
	var spans = skTime.querySelectorAll('span');

	var timer = setInterval(function(){
		time --;

		var h = Math.floor(time/3600);
		var m = Math.floor(time%3600/60);
		var s = time%60;

		/*设置*/
		spans[0].innerHTML = Math.floor(h/10);
		spans[1].innerHTML = h%10; 
		spans[3].innerHTML = Math.floor(m/10); 
		spans[4].innerHTML = m%10; 
		spans[6].innerHTML = Math.floor(s/10); 
		spans[7].innerHTML = s%10; 

		if(time <= 0){
			clearInterval(timer);
		}

	},1000)
}

// 轮播图
