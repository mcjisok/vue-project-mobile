<template>
<div class="jd_container">
	<!-- 顶部搜索 -->
	<header class="jd_search">
		<div class="jd_search_box">
			<a href="#" class="icon_logo"></a>
			<form action="#">
				<span class="icon_search"></span>
				<input type="search" placeholder="Iphone 7 Plus 免费" />
			</form>
			<a v-if="getisLogin" class="login" @click="logout">注销</a>
			<router-link v-else to="/login" class="login">登陆</router-link>
		</div>
	</header>

	<!-- 轮播图 -->
	<div class="jd_banner">
		<ul class="clearfix">
			<li><a href="#"><img src="static/images/3.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/1.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/2.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/3.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/1.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/3.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/1.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/2.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/3.jpg" alt="#" /></a></li>
			<li><a href="#"><img src="static/images/1.jpg" alt="#" /></a></li>
		</ul>
		<ul>
			<li class="now"></li>
			<li></li>
			<li></li>		
			<li></li>
			<li></li>	
			<li></li>
			<li></li>	
			<li></li>
			<li></li>				
		</ul>
	</div>

	<!-- 导航栏 -->
	<nav class="jd_nav">
		<ul class="clearfix">
			<li><a href="#"><img src="static/images/nav0.png" alt="" /><p>分类</p></a></li>
			<li><router-link to="/category"><img src="static/images/nav1.png" alt="" /><p>分类</p></router-link></li>
			<li><a href="#"><img src="static/images/nav2.png" alt="" /><p>分类</p></a></li>
			<li><a href="#"><img src="static/images/nav3.png" alt="" /><p>分类</p></a></li>
			<li><a href="#"><img src="static/images/nav4.png" alt="" /><p>分类</p></a></li>
			<li><a href="#"><img src="static/images/nav5.png" alt="" /><p>分类</p></a></li>
			<li><a href="#"><img src="static/images/nav6.png" alt="" /><p>分类</p></a></li>
			<li><a href="#"><img src="static/images/nav7.png" alt="" /><p>分类</p></a></li>
		</ul>
	</nav>

	<!-- 产品区块 -->
	<div class="jd_product">
		<section class="jd_proBox">
			<div class="pro_tit nb">
				<div class="f_left">
					<span class="sk_icon"></span>
					<span class="sk_text">掌上秒杀</span>
					<div class="sk_time">
						<span>0</span>
						<span>0</span>
						<span>:</span>
						<span>0</span>
						<span>0</span>
						<span>:</span>
						<span>0</span>
						<span>0</span>
					</div>	
				</div>
				<div class="f_right"><a href="#" class="m_r10">更多></a></div>
			</div>
			<div class="pro_con">
				<ul class="sk_product clearfix">
					<li>
						<a href="#"><img src="static/images/big_1.jpg" alt="" /></a>
						<p class="now_price">￥100</p>
						<p class="old_price">￥1000</p>
					</li>
					<li>
						<a href="#"><img src="static/images/big_1.jpg" alt="" /></a>
						<p class="now_price">￥100</p>
						<p class="old_price">￥1000</p>
					</li>
					<li>
						<a href="#"><img src="static/images/big_1.jpg" alt="" /></a>
						<p class="now_price">￥100</p>
						<p class="old_price">￥1000</p>
					</li>
				</ul>
			</div>
		</section>

		<section class="jd_proBox">
			<div class="pro_tit"><h3>京东自营</h3></div>
			<div class="pro_con clearfix">
				<a href="" class="w_p50 f_left b_right"><img src="static/images/cp1.png" alt="" /></a>
				<a href="" class="w_p50 f_right b_bottom"><img src="static/images/cp2.png" alt="" /></a>
				<a href="" class="w_p50 f_right"><img src="static/images/cp3.png" alt="" /></a>

			</div>
		</section>

		<section class="jd_proBox">
			<div class="pro_tit"><h3>京东新品</h3></div>
			<div class="pro_con clearfix">
				<a href="" class="w_p50 f_right b_left"><img src="static/images/cp4.jpg" alt="" /></a>
				<a href="" class="w_p50 f_left b_bottom"><img src="static/images/cp5.png" alt="" /></a>
				<a href="" class="w_p50 f_left"><img src="static/images/cp6.png" alt="" /></a>
			</div>
		</section>

		<section class="jd_proBox">
			<div class="pro_tit"><h3>京东热门</h3></div>
			<div class="pro_con clearfix">
				<a href="" class="w_p50 f_left b_right"><img src="static/images/cp1.png" alt="" /></a>
				<a href="" class="w_p50 f_right b_bottom"><img src="static/images/cp2.png" alt="" /></a>
				<a href="" class="w_p50 f_right"><img src="static/images/cp3.png" alt="" /></a>
			</div>
		</section>

	</div>
	<footbar></footbar>
</div>	
</template>
<script>
import indexjs from '../assets/js/index.js'
import Footbar from './Footbar.vue'
import { setCookie,getCookie,delCookie} from '../assets/js/cookie'
import { Toast } from 'mint-ui';
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'home',
    data (){
        return {
            isLogin:false
        }
	},
	computed:{
		...mapGetters(['getisLogin'])
	},
	methods:{
		...mapActions(['changeIsLogin']),
		// checkLogin:function(){
		// 	if(getCookie('userid')){
		// 		console.log(this.getisLogin)
		// 		this.changeIsLogin();				
		// 	}
		// 	else{
		// 		this.$router.push({ path: '/login' })
		// 	}
		// },
		logout:function(){
			delCookie('userid');
			delCookie('name');			
			// this.isLogin = false 
			this.changeIsLogin();
			let instance = Toast('注销成功');
			setTimeout(() => {
				instance.close();  
				// this.checkLogin();        
				
			}, 1500);

		},
		...mapActions(['changeIsLogin'])
	},
	components:{
		Footbar
	},
	mounted:function(){
		// this.checkLogin();
	}
}
</script>
<style lang="scss" scoped>
/* base css */
/*reset.css  重置样式*/
*{
	/*选中所有的元素和伪元素*/
	margin:0;
	padding: 0;


	/*针对移动端*/
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-webkit-tap-highlight-color:transparent;


}
body{
	font-size: 14px;
	color: #333;
	font-family: 'Microsoft Yahei',sans-serif;
    background-color: #f5f5f5;
}
ul,ol{
	list-style: none;
}
a{
	text-decoration: none;
	color: #333;
}
input,textarea{
	outline: none;
	border:none;
	resize: none;
	-webkit-appearance:none;
}

/*common css公用样式*/
.f_left{
	float: left;
}

.f_right{
	float: right;
}

.clearfix::before,
.clearfix::after{
	content: "";
	display: block;;
	height: 0;
	line-height: 0;
	visibility: hidden;
	clear: both;
}

.m_l10{
	margin-left: 10px;
}

.m_r10{
	margin-right: 10px;
}
body{
	background: #f5f5f5;
}

/*版心容器*/

.jd_container{
	width: 100%;
	max-width: 640px;
	min-width: 320px;
	margin: 0 auto;
}

.jd_search{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 999;
	.jd_search_box{
		width: 100%;	
		height: 40px;
		background-color: rgba(216,80,92,0);
		max-width: 640px;
		min-width: 320px;
		margin: 0 auto;
		position: relative;
		a{
			position: absolute;
			top: 0;
		}
		.icon_logo{
			width: 60px;
			height: 40px;
			left: 0;
		}
		.login{
			width: 50px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			color: #fff;
			right: 0;
		}
		form{
			width: 100%;
			padding-left: 60px;
			padding-right: 50px;
			input{
				width: 100%;
				height: 30px;
				border-radius: 15px;
				margin-top:5px;
				padding-left: 30px
			}
			.icon_search{
				width: 20px;
				height: 20px;
				background: #eee;
				position: absolute;
				left: 65px;
				top: 10px;
			}
		}
	}
}


/*轮播图*/
.jd_banner{
	width: 100%;
	overflow: hidden;
	position: relative;
	ul:first-child{
		width: 1000%;
		transform: translateX(-10%);
		-webkit-transform: translateX(-10%);
		li{
			width: 10%;
			float: left;
		}
		a{
			width: 100%;
			display: block;
			img{
				width: 100%;
				display: block;
			}
		}
	}
	ul:last-child{
		position: absolute;
		bottom: 8px;
		left: 50%;
		margin-left: -45px;
		width: 90px;
		li{
			width: 6px;
			height: 6px;
			border-radius: 3px;
			border:1px solid #fff;
			float: left;
			margin-left: 10px;
		}
		li:first-child{
			margin-left: 0;
			.now{
				background: #fff;
			}
		}
	}
}


/*导航栏*/
.jd_nav{
	width: 100%;
	background: #fff;
	ul{
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
		li{
			width: 25%;
			float: left;
			a{
				display: block;
				width: 100%;
				img{
					width: 40px;
					height: 40px;
					display: block;
					margin:0 auto;
				}
				p{
					color:#666;
					font-size: 12px;
					padding: 5px 0;
					text-align: center;
				}
			}
		}
	}
}



/*产品区块*/
.jd_product{
	padding: 0 5px;
	background-color: rgb(241, 240, 240);
}

/*商品盒子*/
.jd_proBox{
	margin-top: 10px;
	box-shadow: 0 0 1px #d8d8d8;
	min-height: 180px;
	background: #fff;
	.pro_tit{
		width: 100%;
		height: 34px;
		line-height: 34px;
		border-bottom: 1px solid #ddd;
	}
	.pro_tit.nb{
		border:none;
	}
	.pro_tit h3{
		position: relative;
		text-indent: 20px;
		font-weight: normal;
	}
	.pro_tit h3::before{
		content: "";
		position: absolute;
		left: 10px;
		top: 11px;
		width: 3px;
		height: 12px;
		background: #d8505c;
	}
}


/*秒杀*/
.sk_icon{
	width: 16px;
	height: 20px;
	float: left;
	background: #eee;
	margin-top:7px;
	margin-left: 10px;
}
.sk_text{
	color: #d8505c;
	margin-left: 10px;
	float: left;
}
.sk_time{
	float: left;
	margin-left: 10px;
}
.sk_time span{
	width: 16px;
	height: 16px;
	text-align: center;;
	line-height: 16px;
	color: #fff;
	background-color: #333;
	margin-left: 3px;
	float: left;
	margin-top:8px;
}

.sk_time span:nth-child(3n){
	background: #fff;
	color: #333;
	width: 3px;
}

/*秒杀专区的商品*/
.sk_product{
	width: 100%
}
.sk_product li{
	width: 33.3333%;
	float: left;
	margin-top: 10px;
}
.sk_product li a{
	width: 100%;
	display: block;
	border-right: 1px solid #ddd;
}
.sk_product li:last-child a{
	border-right:none;
}
.sk_product li a img{
	width: 64%;
	margin:0 auto;
	display: block;
}
.sk_product li p{
	font-size:12px;
	text-align: center;;
	padding: 5px 0 0 0;
}
.sk_product li .now_price{
	color: #d8505c
}
.sk_product li .old_price{
	color: #666;
	text-decoration: line-through;
}


/*组合样式*/
.w_p50{
	width: 50%;
}

.w_p50 img{
	display: block;
	width: 100%;
}

.b_left{
	border-left: 1px solid #ddd;
}

.b_right{
	border-right: 1px solid #ddd;
}

.b_bottom{
	border-bottom: 1px solid #ddd;
}


</style>

