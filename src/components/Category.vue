<template>
	<div class="jd_category">
		<Search></Search>
		<div class="jd_main" >        
			<div class="cate_left" ref="cate_left">
				<ul>               
					<li v-for="(item,index) in msg">
						<a href="javascript:;" v-bind:id="item._id" v-on:touchstart="cateright(item._id,index)">{{item.name}}</a>
					</li>
				</ul>
			</div>
		<!-- <router-link to="/good_list">/user/foo</router-link> -->
			<div class="cate_right" ref="cate_right">
				<div class="cate_right_box">
					<a href="javascript:;" class="banner">
						<img :src="Api + catebanner" alt="">
					</a>
					<div class="hot-category" v-if="childmsg.length > 0" v-for="(item,index) in childmsg">
						<h3><router-link :to="'/good_list/' + item._id">{{item.name}}</router-link></h3>                    
						<ul class="clearfix">
							<li v-for="(product,index) in item.products">
								<router-link :to="'/detail/' + product._id">
									<img :src="Api + product.product_poster" alt="" width="300">
								</router-link>
							</li>
						</ul>                    
					</div>
				</div>
			</div>
		</div>
		<footbar></footbar>

	</div>
</template>
<script>
import BScroll from 'better-scroll'
import Search from './Searchbar.vue'
import Footbar from './Footbar.vue'
import { Indicator } from 'mint-ui';
export default {
    name: 'category',
    data () {
        return {
        //data:[{name:'1'},{name:'2'},{name:'3'}],
        msg :'',
        catebanner:'',
        childmsg:'',
        apiUrl: this.GLOBAL.host + '/vue_api/category',
		cateright_api:this.GLOBAL.host + '/vue_api/childcate',
		Api:this.GLOBAL.host
        }
	},
	components:{Search,Footbar},
    methods: {
        ceshi:function(){
            console.log('1111')
        },
        getdata: function () {        
        this.$http.get(this.apiUrl)
            .then((response) => {
                this.msg = response.body
                this.catebanner = this.msg[0].banner
                this.childmsg = this.msg[0].childcates

                //滚动事件
                this.scroll = new BScroll(this.$refs.cate_left, {click: true,tap: true})
				this.scroll = new BScroll(this.$refs.cate_right, {click: true,tap: true})  
				Indicator.close();          
            
            //console.log(response.body)
            }).catch(function (response) {
                console.log(response)
            })
        },
        cateright: function (id,index) {
            this.catebanner = this.msg[index].banner        
            //console.log(id)
            this.$http.post(this.cateright_api, {id: id}).then(response => {
                // get status
                // response.status;
                // // get status text
                // response.statusText;
                // // get 'Expires' header
                // response.headers.get('Expires');

                // get body data
                this.childmsg = response.body;   
                //console.log(this.childmsg)
                //滚动事件
                
            }, response => {
                // error callback
            });        
        }
	},
	beforeCreated:function(){
		Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		});
	},
    created: function () {
		this.getdata();    
		
    }
}
</script>
<style scoped>
body{
	background: #fff;
}
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
.jd_main{
	width: 100%;
	height: 100%;
	padding-top: 45px;
}
/* 左侧分类 */
.cate_left{
	width: 90px;
	height: 100%;
	float: left;
}
.cate_left ul{
	width: 90px;
}
.cate_left ul li{
	width: 100%;
	height: 50px;
	text-align: center;
	line-height: 50px;
	border-right:1px solid #ccc;
	border-bottom:1px solid #ccc;
	background: #f3f3f3;
	font-size: 12px;
}
.cate_left ul li a{
	display: block;;
}
.cate_left ul li.now{
	border-right: none;
	background: #fff;
}
.cate_left ul li.now a{
	color: #d8505c;
}


/* 右侧商品 */
.cate_right{
	overflow: hidden;
    height:100%;
}

.cate_right_box{
	width: 100%;	
	padding: 0px 10px;
	padding-bottom: 70px;
}
.cate_right_box .banner{
	margin-top: 10px;
	width: 100%;
	display: block;
}
.cate_right_box .banner img{
	display: block;;
	width: 100%;
}
.cate_right_box .hot-category{
	margin-top: 10px;
}
.cate_right_box .hot-category h3{
    display: block;
	font-size: 12px;
    height: 16px;
    line-height: 16px;
    background: rgb(243, 243, 243)
}
.cate_right_box .hot-category ul{
	width: 100%;
	padding: 10px 0;
}
.cate_right_box .hot-category ul li{
	width: 33.3333%;
	float: left;
	margin-top: 8px;
}
.cate_right_box .hot-category ul li a{
	width: 100%;
	display: block;
	text-align: center;
}
.cate_right_box .hot-category ul li a img{
	display: block;
	width: 60px;
	height: 60px;
	margin:0 auto;
}
.cate_right_box .hot-category ul li a p{
	text-align: center;;
	padding: 5px 0;
	font-size: 12px;
	color: #666;
}

.show{
	display: block;
}

.hide{	
	display: none;
}
</style>

