<template>
    <header class="jd_topBar">            
		<a href="javascript:history.back();" class="icon_back"></a>
		<form action="">                
			<input type="search" placeholder="Iphone 7 Plus 免费">
		</form>
		<a href="" class="icon_menu"></a>            
	</header>         
</template>
<script>
export default {
  name: 'search',
  data () {
    return {	  
      msg: 'Welcome to Your Vue.js App',
      apiUrl: 'http://localhost:3000/'
    }
  }
}
</script>

<style>
/* 全屏效果 */
.jd_category{
	position: fixed;
	width: 100%;
	height: 100%;
}

.jd_category{
	position: fixed;
	width: 100%;
	height: 100%;
}

/* 顶部通栏 */
.jd_topBar{
	width: 100%;
	height: 45px;
	border-bottom: 1px solid #ddd;
	background: rgb(241, 240, 240);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
}
.jd_topBar form input{
	padding-left:8px;
}
.jd_topBar a{
	width: 30px;
	height: 30px;
	position: absolute;
	top: 7px;	
	background-origin: content-box;
	background-clip: content-box;
}
.jd_topBar .icon_back{
	left: 5px;
	/* background: url('../images/return.png') no-repeat; */
	background-size: 30px 30px;
}
.jd_topBar .icon_menu{
	right: 5px;
	/* background: url('../images/my.png') no-repeat; */
	background-size: 30px 30px;
}
.jd_topBar form{
	width: 100%;
	padding: 0 40px;
}
.jd_topBar form input{
	width: 100%;
	height: 30px;
	border:1px solid #ddd;
	border-radius: 10px;
	margin-top: 7px;
}
</style>

