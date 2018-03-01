<template>
    <div>
        <header class="header">
            <a href="javascript:history.back();" class="back"></a>
            <h1>
                <em>{{detail.product_title}}</em></h1>
            <nav class="t-nav">
                <ul>
                    <li>
                        <a href="" class="home">首页</a></li>
                    <li>
                        <a href="" class="search">搜索</a></li>
                    <li>
                        <a href="" class="category">分类</a></li>
                    <li>
                        <a href="" class="cart">购物车</a></li>
                    <li>
                        <a href="" class="user">我的商城</a></li>
                </ul>
            </nav>
        </header>
        <!-- 轮播开始 -->
        <div id="bigpic">
            <div id="cell">
                <section class="turn">
                    <section id="slider">
                        <ul class="top-slider" style="width: 200%; -webkit-transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); -webkit-transform: translate(0px, 0px) translateZ(0px);">
                            <li style="width:50%" v-for="(imgurl,index) in detail.product_poster" >
                                <a>
                                    <img :src="'http://localhost:3000'+imgurl" /></a>
                            </li>
                            <!-- <li style="width:50%">
                                <a>
                                    <img class="" src="static/images/1100604422-2_e_1.jpg" /></a>
                            </li> -->
                        </ul>
                        <div class="dot">
                            <ul>
                                <li class="on"></li>
                                <!-- <li class=""></li> -->
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </div>
        <!-- 轮播结束 -->
        <!-- 详情区域开始 -->
        <section class="detail">
            <div class="left">
                <b>￥
                    <span id="main_price">{{detail.product_price}}</span></b>
                <del style="display:none">￥69.00</del>
                <aside></aside>
            </div>
            <div class="right">
                <ul>
                    <li class="fav">
                        <a>收藏</a>
                    </li>
                </ul>
            </div>
            <article>{{detail.product_title}}</article>
            <p>
            </p>
            <!-- 保障区域开始 如果是电子书没有保障区域-->
            <!-- 保障区域结束 --></section>
        <!-- 详情区域结束 -->
        <!-- 税费 只有海外购有税费 -->
        <!-- 税费结束 -->
        <!-- 加载促销信息模板开始 -->
        <!-- 单品级促销有附加商品 -->
        <!-- 店铺级促销没有附加商品 -->
        <section class="promotion">
            <a href="javascript:void(0)" class="arrow_con">
                <div class="label">
                    <div class="table">
                        <div class="cell">
                            <span class="purple">商品卖点</span></div>
                    </div>
                </div>
                <div class="info">
                    <p>满￥99.00减￥20.00,满￥199.00减￥60.00</p>
                </div>
            </a>
        </section>
        <!-- 店铺级促销没有附加商品 -->
        <!-- 加载促销信息模板结束 -->
        <section class="detail book_detail">
            <a href="#">
                <div class="title">
                    <div class="right">
                        <span class="icon"></span>
                    </div>商品简介</div>
            </a>
            <p>
                <span>产&nbsp;&nbsp;&nbsp;&nbsp;品：</span>姗蔻无毒指甲油包邮环保裸色指甲油儿童孕妇持久无毒指甲油快干</p>
            <p>
                <span>净含量：</span>7.5</p>
            <p>
                <span>上市时间：</span>2013-06-18</p>
            <p>
                <span>颜色分类：</span>颜色分类: 湖水蓝 裸粉色 透明亮片 玫红色 珠光红</p>
            <p>
                <span>肤&nbsp;&nbsp;&nbsp;&nbsp;质：</span>任何肤质</p>
            <p>
                <span>产&nbsp;&nbsp;&nbsp;&nbsp;地：</span>中国</p></section>
        <!-- 配送开始 -->
        <section class="select_box">
            <section class="title">
                <a class="back">返回</a>
                <span class="title">选择配送地区</span>
                <a class="close">关闭</a></section>
            <div id="regionScroller">
                <section style="-webkit-transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); -webkit-transform: translate(0px, 0px) translateZ(0px);">
                    <dl class="content"></dl>
                </section>
            </div>
        </section>
        <!-- 配送结束 -->
        <!-- 选项开始 -->
        <!-- 数量开始 -->
        <!-- <section class="quantity">
            <h4>数量：</h4>
            <div class="number_con">
                <span class="minus">-</span>
                <div class="input">
                    <input id="buy_num" type="text" v-model="good_number" /></div>
                <span class="plus on">+</span></div>
        </section> -->
        <section class="review_area">
            <section class="jump">
                <a href="" class="arrow_con">
                    <div class="arrow">
                        <h4>商品评论（254）</h4>
                        <em>好评率92.9%</em></div>
                    <div style="line-height: 30px;">&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style="font-weight: bold;font-size: 12px">Johnson丶Lee</span>
                        <br />
                        <div style="padding-left: 14px;line-height: 1.5;font-size: 10px;">卖家服务态度很好，随商品也有附赠的小赠品，感觉买这家的商品很舒服。快递也非常快，接到东西的时候还感到有些意外：怎么这么快？！
                            <div style="float: right;padding-right: 7px;font-weight: bold">2015-09-16</div></div>
                    </div>
                </a>
            </section>
        </section>
        <!-- 商品评论结束 -->
        <!-- 店铺评价开始 -->
        <section class="shop">
            <a href="">
                <div class="shop_con arrow_con">
                    <div class="arrow">
                        <div class="logo">
                            <img src="static/images/2011111810580945.jpg" alt="Sweet city美甲官方旗舰店" /></div>
                        <div class="name">Sweet city美甲官方旗舰店</div></div>
                </div>
            </a>
            <ul class="evaluation">
                <li>
                    <p>描述相符</p>
                    <em>4.9</em>
                    <i class="low">低</i></li>
                <li>
                    <p>服务态度</p>
                    <em>4.9</em>
                    <i class="low">低</i></li>
                <li>
                    <p>发货速度</p>
                    <em>4.8</em>
                    <i class="low">低</i></li>
                <li>
                    <p>关注人数</p>
                    <em>11980</em></li>
            </ul>
            <div class="shop_btn">
                <span>
                    <a id="collect_shop">关注店铺</a></span>
                <span>
                    <a href="">进店逛逛</a></span>
            </div>
        </section>
        <!-- 店铺评价结束 -->
        <!-- 猜你喜欢开始 -->
        <section class="J_guess">
            <section class="guess">
                <div class="title_con">
                    <span class="title">猜你喜欢</span>
                    <div class="line"></div>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <aside>
                                <img class="" src="static/images/1477078008-1_b.jpg" /></aside>
                            <span>【包邮】珍视明冰敷眼罩 冷热敷双功效 缓解眼疲劳 满108赠礼 买就赠眼贴</span>
                            <em>￥45.00</em></a>
                    </li>
                    <li>
                        <a href="">
                            <aside>
                                <img class="" src="static/images/1273687641-1_b.jpg" /></aside>
                            <span>女神新妆彩妆套装 现在买送 大礼包 BB霜+眼线液笔+ 加妆前乳+新款口红+睫毛</span>
                            <em>￥128.00</em></a>
                    </li>
                    <li>
                        <a href="">
                            <aside>
                                <img class="" src="static/images/1426474506-1_b.jpg" /></aside>
                            <span>韩熙贞 丝滑细腻埃及粉饼 控油防汗修容 清爽服帖 补妆 全网抢购中</span>
                            <em>￥39.00</em></a>
                    </li>
                    <li>
                        <a href="">
                            <aside>
                                <img class="" src="static/images/1206438229-1_b.jpg" /></aside>
                            <span>珍视明 薰衣草蒸汽眼罩 芳香蒸汽热敷 遮光安神助眠 买就赠眼贴！买3赠大礼包</span>
                            <em>￥49.00</em></a>
                    </li>
                </ul>
            </section>
        </section>
        <!-- 猜你喜欢结束 -->
        <!-- 购物车开始 -->
        <section class="shopping_cart">
            <div class="btn_con">
                <button class="add" dd_name="加入购物车">加入购物车</button>
                <button class="buy J_buy" dd_name="直接购买" @click="buy">立即购买</button>
            </div>
            <a href="" class="cart" dd_name="查看购物车">
                <span>购物车
                    <i></i>
                </span>
            </a>
            <transition name="slide-fade">
                <div class="shopping_alert" v-show="shoppingshow">
                    <div class="good">
                        <div class="good_img"><img :src="'http://localhost:3000'+detail.product_poster" alt=""></div>
                        <div class="good_message">
                            <p class="good_title">{{detail.product_title}}</p>
                            <span class="good_price">单价：￥{{detail.product_price}}</span>
                            <span class="good_kucun">库存：{{detail.product_stock}}{{detail.product_unit}}</span>
                        </div>
                        <div class="close" @click="close">
                            <span>关闭</span>
                        </div>
                    </div>
                    <div class="guige"></div>
                    <div class="count">
                        <span class="tips">购买数量</span>
                        <div class="compute">
                            <span class="minus" @click="minus">
                                <button>-</button>
                            </span>
                            <span>
                                <input type="text" v-model="good_number">
                            </span>
                            <span class="add" @click="add">
                                <button>+</button>
                            </span>
                        </div>
                    </div>
                    <div class="gobuy">
                        <div class="services">客服</div>
                        <div class="cartview">购物车</div>
                        <div class="buynow" >立即购买</div>
                        <div class="addtocart" @click="addtocart">加入购物车</div>
                    </div>
                </div>
            </transition>
        </section>
        <!-- 购物车结束 -->
        <form id="product_form" action="" method="post">
            <input type="hidden" value="touch" name="user_client" />
            <input type="hidden" value="1.0" name="client_version" />
            <input type="hidden" value="get_order_flow" name="action" />
            <input type="hidden" value="" name="union_id" />
            <input type="hidden" value="20151007171938214237638454188786121" name="permanent_id" />
            <input type="hidden" value="0" name="shop_id" />
            <input type="hidden" value="d256b1d537fe186e53c0444399341c24" name="udid" />
            <input type="hidden" value="1444442002" name="timestamp" />
            <input type="hidden" value="659ac7e360252f81fe946a0c662d7e7b" name="time_code" />
            <input type="hidden" value="ddapp_h5|" name="order_follow_source" />
        </form>
        <!-- loading开始 -->
        <section class="loading"></section>
        <!-- loading结束 -->
        <!-- 遮罩开始 -->
        <section class="mask"></section>
        <!-- 遮罩结束 -->
        <!-- popup开始 -->
        <section class="popup">
            <div class="box">
                <p class="cell">
                    <span class="con">
                        <span class="title">温馨提示</span>
                        <span class="info"></span>
                        <a href="javascript:void(0);" class="btn determine" ontouchstart="">
                            <em>确定</em></a>
                        <a href="javascript:void(0);" class="btn cancel" ontouchstart="">
                            <em>取消</em></a>
                        <a href="javascript:void(0);" class="btn ok" ontouchstart="">
                            <em>确定</em></a>
                    </span>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import { setCookie,getCookie } from '../assets/js/cookie'
import { Toast } from 'mint-ui'
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            detail:'',
            good_number:1,
            good_price:0,
            gooddetail_api:'http://localhost:3000/vue_api/gooddetail/',
            shoppingshow:false           

        }
    },
    computed:{
        ...mapGetters(['getisLogin'])
    },
    methods:{
        getdata:function(){
            var goodid = this.$route.params.id
            this.$http.get(this.gooddetail_api+goodid)
                .then((response) => {
                this.detail = response.body.gooddetail
                this.good_price = this.detail.product_price
                // this.catebanner = this.msg[0].banner
                // this.childmsg = this.msg[0].childcates
                //goodlist列表页滚动
                console.log(this.detail)
                
                //console.log('1111')
                //console.log(response.body)
                })
                .catch(function (response) {
                console.log(response)
            })    
        },
        buy:function(){
            this.shoppingshow = !this.shoppingshow
        },
        close:function(){
            this.shoppingshow = !this.shoppingshow            
        },
        minus:function(){
            if(this.good_number >0){
                this.good_number --                
            }
        },
        add:function(){
            this.good_number ++
        },
        addtocart:function(){
            if(this.getisLogin === true){
                var goodID = this.$route.params.id            
                var userID = getCookie('userid')
                console.log(userID)
                var storeID = this.detail.store_id
                var good_count = this.good_number
                this.$http.post(
                'http://localhost:3000/vue_api/addtocart', 
                // 请求体重发送数据给服务端
                {
                    userID:userID,
                    goodID:goodID,
                    storeID:storeID,
                    good_count:good_count,
                    good_num: this.good_number,
                    good_price:this.detail.product_price,
                    good_freight:this.detail.product_freight                
                }).then(function (data) {
                    // 成功回调
                    if(data.body.success == 1){
                        alert('加入购物车成功') 
                        this.shoppingshow = !this.shoppingshow
                        this.good_number = 1
                    }
                }, function () {
                    // 失败回调
                });
            }else{
                // alert('请先登录')
                let instance = Toast('您尚未登录，即将跳转到登录页面...')
                setTimeout(()=>{
                    instance.close()
                    this.$router.push('/login')
                },1500)
            }
            
            
        }
    },
    mounted:function(){
        this.getdata();
    }
}

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

body,header,footer,section,div,span,p,img,a,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,em,i,b,u,del,button,input,textarea{padding:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:Helvetica;}
input,textarea{-webkit-user-select:auto !important;}
:focus{outline:none;}
img{vertical-align:middle;border:0 none;}
ul{list-style:none;}
a{text-decoration:none;}
section{margin:0 auto;}
header,footer{margin:0 auto;width:100%;}
em,i{font-style:normal;}
input{outline:none;}
html,body{width:100%;height:100%;}
button,input{border:0 none;}
u,del{text-decoration:none;}
/* webkit����������ȡ��Ĭ����ʽ */
/* input[type="submit"],input[type="reset"],input[type="button"],button{-webkit-appearance:none;}
::-webkit-scrollbar {width: 0px;} */

body{background-color:#eee;}

/* media query */
html,body{font-size:20px;}
@media only screen and (min-width:640px){
	html,body{font-size:40px;}
}

.header .back{text-indent:-99rem;}
.header{z-index:5;position:relative;margin:0 auto;overflow:hidden;width:100%;line-height:2.2rem;background-color:#fff;color:#333;}
.header .back{z-index:2;position:absolute;top:0;left:0;height:2.2rem;padding-left:1.5rem;background:url(/static/images/back.png) no-repeat .75rem center;background-size:auto .75rem;font-size:0;width:.5rem;overflow:hidden;text-indent:-999rem;}
/* .header .menu{z-index:2;position:absolute;top:0;right:0;width:2rem;height:2.2rem;background:url(../coreimages/menu.png) no-repeat center;background-size:1.1rem;line-height:2.2rem;font-size:.7rem;-webkit-transition:background .3s;transition:background .3s;overflow:hidden;text-indent:-999rem;}
.header .menu.active{background-image:url(../coreimages/menu-active.png);background-size: 0.8rem;} */
/* .header .menu.active:after{content: " ";display: block;position: absolute;bottom: 0;width: 100%;height: .35rem;background:url(../coreimages/connect.png) no-repeat center 0;} */
.header .h_label,.header h1{-webkit-box-sizing:border-box;box-sizing:border-box;position:static;height:2.2rem;text-align:center;font-size:.85rem;font-weight:normal;color:#333;padding:0 2rem;text-overflow:ellipsis;white-space:nowrap;border-bottom:1px solid #d8d8d8;}
.header .h_label em,.header h1 em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.t-nav{width:100%;height:0;overflow:hidden;text-align:center;line-height:0;background-color:#eee;font-size:.6rem;-webkit-transition:height .3s;transition:height .3s;}
.t-nav.active{height:2.5rem;border-bottom:1px solid #d8d8d8;}
.t-nav ul{display:block;list-style:none;}
.t-nav ul:after{content:"";display:block;clear:both;height:0;}
.t-nav ul li{display:inline-block;float:left;width:20%;}
/* .t-nav ul li a{display:inline-block;width:100%;padding:1.5rem 0 .1rem;background:url(../coreimages/h-home.png) no-repeat center .3rem;background-size:1.1rem;line-height:.8rem;color:#4d525d;}
.t-nav ul li .home{background-image:url(../coreimages/h-home.png);}
.t-nav ul li .search{background-image:url(../coreimages/h-search.png);}
.t-nav ul li .category{background-image:url(../coreimages/h-category.png);}
.t-nav ul li .cart{background-image:url(../coreimages/h-cart.png);}
.t-nav ul li .user{background-image:url(../coreimages/h-user.png);} */
/* turning */
.top-slider{position: relative;}
.turn{width:100%;position:relative;overflow:hidden;}
.turn #slider{width:100%;overflow:hidden;position:relative;}
.turn #slider li{display:block;float:left;}
.turn #slider li img{width:100%;height:auto;}
.turn .dot{position:absolute;bottom:.25rem;left:0;text-align:center;width:100%;z-index:2;}
.turn .dot ul{display:inline-block;overflow:hidden;padding-left:.25rem;}
.turn .dot li{display:inline;float:left;margin:.075rem .25rem .075rem 0;width:.3rem;height:.3rem;background-color:#ccc;-webkit-border-radius:.15rem;border-radius:.15rem;font-size:0;line-height:0;text-align:-999em;}
.turn .dot li.on{background-color:#ff463c;}

/* detail */
.ellipsis{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.detail{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;padding-top:.5rem;position:relative;}
.detail .left{margin-right:3.5rem;margin-left:.5rem;min-height:2rem;overflow:hidden;white-space:nowrap;}
.detail .left b{color:#fe435d;font-size:1rem;line-height:1rem;margin-right:.25rem;}
.detail .left del{color:#999;font-size:.75rem;/*margin-right:.25rem;*/text-decoration:line-through;}
.detail .left em{color:#4d525d;font-size:.6rem;display:inline-block;}
.detail .left aside{padding-top:.1rem;}
/* ��ǩ */
aside{clear:both;overflow:hidden;display:block;font-size:0;line-height:0;}
aside span{display:inline-block;color:white;margin-right:.2rem;padding:0 .2rem;border-radius:.1rem;line-height:.65rem;font-size:.55rem;}
aside span.red{background-color:#fe435d;}
aside span.blue{background-color:#67c9e2;}
aside span.orange{background-color:#ff6c00;}
aside span.purple{background-color:#8970bd;}
aside span.phone{background-image:url(/static/images/icon_phone.png);background-position:.25rem center;background-repeat:no-repeat;background-size:.5rem .5rem;text-indent:.65rem;}
aside span.earth{background-image:url(/static/images/icon_earth.png);background-position:.25rem center;background-repeat:no-repeat;background-size:.5rem .5rem;text-indent:.65rem;}
.detail .right{position:absolute;right:0;top:.5rem;background-color:white;z-index:2;}
.detail .right ul{overflow:hidden;}
.detail .right ul li{width:3rem;height:2rem;float:left;-webkit-box-sizing:border-box;box-sizing:border-box;}
.detail .right ul li:first-child{border-left:1px solid #ddd;}
.detail .right ul li a{display:block;text-align:center;font-weight:normal;font-size:.6rem;width:100%;height:.8rem;padding-top:1.2rem;line-height:.8rem;background-position:center .125rem;background-repeat:no-repeat;background-size:.9rem .9rem;color:#4d525d;}
.detail .right ul li a:visited{color:#4d525d;}
.detail .right ul li.fav a{background-image:url(/static/images/fav.png);}
.detail .right ul li.fav.on a{background-image:url(/static/images/fav_on.png);}
.detail .right ul li.read a{background-image:url(/static/images/read.png);}
.detail article{display:-webkit-box;margin:.25rem .5rem .2rem .5rem;font-size:.7rem;color:#4d525d;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;word-break:break-all;}
.detail article.last{margin-bottom:.5rem;}
.detail p{display:block;padding-top:.2rem;padding-bottom:.25rem;margin-left:.5rem;margin-right:.5rem;color:#5f646e;font-size:.6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:.8rem;}
.detail p time{color:#fe435d;display:inline;}

/* �Զ� */
.detail .left.two{margin-right:5.25rem;}
.detail .right ul.two li{width:2.375rem;}

/* ���� */
.ensure{padding:.55rem .5rem 0 .5rem;border-top:1px dashed #ddd;background-color:#fffaf6;}
.ensure ul{overflow:hidden;color:#4d525d;font-size:.55rem;}
.ensure ul li{float:left;display:block;margin-right:.75rem;text-indent:.875rem;background-repeat:no-repeat;background-position:left center;background-size:contain;height:.6rem;line-height:.6rem;margin-bottom:.55rem;}
.ensure ul li:last-child{margin-right:0;}
.ensure ul li.seven{background-image:url(/static/images/icon_seven.png);}
.ensure ul li.pay{background-image:url(/static/images/icon_pay.png);}
.ensure ul li.quality{background-image:url(/static/images/icon_quality.png);}
.ensure ul li.check{background-image:url(/static/images/icon_check.png);}

/* ���� */
.promotion{background-color:white;border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;}
.promotion a{position:relative;}
.promotion .label{position:absolute;top:0;left:.5rem;width:5.8rem;height:100%;}
.promotion .table{display:table;width:100%;height:100%;}
.promotion .table .cell{display:table-cell;vertical-align:middle;font-size:0;line-height:0;}
.promotion .table .cell span{display:inline-block;padding:0 .25rem;color:white;font-size:.55rem;height:.85rem;line-height:.65rem;border-radius:.1rem;}
.promotion .table .cell span.purple{background-color:#a88cff;}
.promotion .info{margin-left:3.5rem;}
.promotion .info p{margin-right:1rem;color:#797d85;font-size:.6rem;line-height:.8rem;word-break:break-all;}

/* ��ͷ */
.arrow_con{display:block;padding:.5rem;line-height:1.2rem;}
.arrow_con > *{overflow:hidden;}
.arrow,.arrow_d{display:block;background-position:right center;background-color:white;background-repeat:no-repeat;background-size:.55rem .55rem;}
.arrow{background-image:url(/static/images/jump_arrow.png);}
.arrow_d{background-image:url(/static/images/arrow_down.png);}
.arrow_d.up{background-image:url(/static/images/arrow_up.png);}

/* ���� */
.barter{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;padding:.5rem;}
.barter h2{float:left;color:#797d85;font-size:.7rem;font-weight:normal;}
.barter span{float:right;color:#4d525d;font-size:.55rem;display:inline-block;margin-top:.15rem;max-width:45%;text-align:right;}
.barter .barter_product{clear:both;width:100%;overflow-x:scroll;overflow-y:hidden;}
.barter ul{padding-top:.375rem;}
.barter ul li{width:2.5rem;height:2.5rem;float:left;margin-right:.5rem;position:relative;}
.barter ul li:last-child{margin-right:0;}
.barter ul li img{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:auto;border:1px solid #e5e5e5;}
.barter ul li.selected  i{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;background:url(/images/present_right.png) center center no-repeat rgba(254,67,93,.1);background-size:.75rem .75rem;border:1px solid #fe435d;}

/* �������� */
.jump_detail{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;}
.jump_detail dl{position:relative;}
.jump_detail dl dt{display:block;position:absolute;left:0;top:0;width:3.5rem;color:#4d525d;font-size:.7rem;}
.jump_detail dl dd{display:block;padding-right:1rem;margin-left:3.5rem;color:#4d525d;font-size:.65rem;line-height:1rem;padding-top:.1rem;}
.jump_detail dl dd b{font-weight:normal;color:#fe435d;}

/* ˰�� */
.jump_detail dl.small dt{font-size:.65rem;width:2.5rem;}
.jump_detail dl.small dd{line-height:normal;margin-left:2.5rem;}

/* ѡ�� */
.option{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;}
.option .title div{font-size:.7rem;color:#4d525d;}
.option .title div span{display:inline-block;padding-right:.25rem;}
.option .title div span.size{padding-right:0;}
.option .title .split{display:none;}
.option .option_detail{border-top:1px solid #ddd;padding-bottom:.5rem;}
.option .option_detail .thumbnail{position:relative;overflow:hidden;margin:.5rem .5rem 0 .5rem;}
.option .option_detail .thumbnail dt{display:block;height:2.5rem;width:2.5rem;position:absolute;top:0;left:0;}
.option .option_detail .thumbnail dt img{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border:1px solid #e5e5e5;}
.option .option_detail .thumbnail dd{display:table;margin-left:3rem;height:2.5rem;}
.option .option_detail .thumbnail dd .con{display:table-cell;vertical-align:middle;font-size:.6rem;color:#37393e;}
.option .option_detail .thumbnail dd .con span{display:inline-block;padding-right:.25rem;}
.option .option_detail .thumbnail dd .con span.price{display:block;font-size:.7rem;color:#fe435d;line-height:1.2rem;padding-right:0;}
.option .option_detail .thumbnail dd .con span.split{display:none;}
.option .option_detail .thumbnail dd .con span.size{padding-right:0;}

.option .option_detail h3{color:#4d525d;font-size:.7rem;margin:.5rem .5rem 0 .5rem;clear:both;font-weight:normal;}
.option .option_detail ul{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;overflow:hidden;padding-right:.5rem;}
.option .option_detail ul li{-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:.375rem;margin-left:.5rem;min-width:3.375rem;padding:0 .5rem;border:1px solid #e5e5e5;text-align:center;border-radius:.15rem;font-size:.7rem;color:#4d525d;line-height:1.4rem;background-color:#f8f8f8;float:left;}
.option .option_detail ul li.stockout{border:1px solid #e5e5e5;background-color:#f8f8f8;color:#ddd;}
.option .option_detail ul li.on{border:1px solid #fe435d;background-color:#fe435d;color:white;}
.option .option_detail ul li:nth-child(4n){margin-right:0;}
/* ���� */
.quantity{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;padding:.5rem;overflow:hidden;}
.quantity h4{color:#4d525d;font-size:.7rem;line-height:1.5rem;font-weight:normal;float:left;}
.quantity .number_con{display:table;border:1px solid #e5e5e5;border-radius:.15rem;}
.quantity .number_con .minus,.quantity .number_con .plus{display:table-cell;vertical-align:middle;width:1.7rem;text-align:center;background-color:#f8f8f8;color:#ddd;height:1.4rem;font-size:1.4rem;line-height:1.4rem;overflow:hidden;text-indent:-999rem;}
.quantity .number_con .minus{background:url(/static/images/control.png) #f8f8f8 0 -1.4rem no-repeat;background-size:200%;border-right:1px solid #e5e5e5;}
.quantity .number_con .minus.on{background:url(/static/images/control.png) #f8f8f8 0 0 no-repeat;background-size:200%;}
.quantity .number_con .plus{background:url(/static/images/control.png) #f8f8f8 -1.7rem -1.4rem no-repeat;background-size:200%;border-left:1px solid #e5e5e5;}
.quantity .number_con .plus.on{background:url(/static/images/control.png) #f8f8f8 -1.7rem 0 no-repeat;background-size:200%;}
.quantity .number_con .input{display:table-cell;-webkit-box-sizing:border-box;box-sizing:border-box;width:2rem;height:1.4rem;font-size:0;}
.quantity .number_con .input input{text-align:center;width:100%;height:100%;color:black;font-size:.7rem;}

/* ͨ����ת */
.jump{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;}
.jump h4{color:#4d525d;font-size:.7rem;line-height:1.2rem;font-weight:normal;float:left;}
.jump h4 span{display:inline-block;margin-left:.5rem;color:#969696;}
.jump h4 span i{color:#fe435d;}
.jump em{color:#969696;font-size:.55rem;height:.8rem;line-height:1.2rem;float:right;display:inline-block;margin-right:.75rem;}

/* �������� */
.shop{border-top:1px solid #ddd;border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;padding:.5rem;}
.shop .shop_con{position:relative;padding-bottom:.5rem;border-bottom:1px solid #dcdcdc;}
.shop .shop_con.arrow_con{padding:0 0 .5rem 0;}
.shop .shop_con .logo{position:absolute;left:0;top:0;width:1.7rem;height:1.7rem;}
.shop .shop_con .logo img{width:100%;height:auto;border-radius:.15rem;}
.shop .shop_con .name{margin-left:2.25rem;margin-right:.75rem;color:#4d525d;font-size:.8rem;line-height:1.7rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.shop .evaluation{margin-top:.5rem;overflow:hidden;}
.shop .evaluation li{-webkit-box-sizing:border-box;box-sizing:border-box;float:left;width:25%;border-left:1px solid #dcdcdc;text-align:center;}
.shop .evaluation li:first-child{border-left:0 none;}
.shop .evaluation li p{color:#999;font-size:.6rem;margin-bottom:.3rem;}
.shop .evaluation li em{display:inline-block;font-size:.75rem;color:#4d525d;line-height:.8rem;font-weight:bold;vertical-align:middle;}
.shop .evaluation li i{display:inline-block;font-size:.55rem;color:white;line-height:.8rem;border-radius:.1rem;height:.8rem;width:.8rem;text-align:center;vertical-align:middle;}
.shop .evaluation li i.low{background-color:#a48fff;}
.shop .evaluation li i.middle{background-color:#ffa749;}
.shop .evaluation li i.high{background-color:#ff635b;}
.shop .shop_btn{overflow:hidden;margin-top:1rem;}
.shop .shop_btn span{-webkit-box-sizing:border-box;box-sizing:border-box;display:table;width:50%;padding-left:0;padding-right:.25rem;float:left;}
.shop .shop_btn span:last-child{padding-left:.25rem;padding-right:0;}
.shop .shop_btn span a{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:1.7rem;display:table-cell;border:1px solid #c2c3ca;border-radius:.15rem;font-size:.7rem;color:#4d525d;vertical-align:middle;width:100%;text-align:center;font-weight:bold;}
.shop .shop_btn span a:visited{color:#4d525d;}

/* ����ϲ�� */
.guess{padding:.5rem .375rem .5rem .5rem;}
.guess .title_con{position:relative;display:block;height:.8rem;text-align:center;margin-bottom:.4rem;font-size:0;}
.guess .title_con .title{font-size:.6rem;display:inline-block;line-height:.8rem;background-color:#eee;padding:0 1.25rem;position:relative;z-index:2;vertical-align:top;color:#969696;}
.guess .title_con .line{height:0;font-size:0;line-height:0;border-bottom:1px solid #ccc;position:absolute;top:.4rem;left:0;width:100%;z-index:1;}
.guess ul{overflow:hidden;}
.guess ul li{-webkit-box-sizing:border-box;box-sizing:border-box;float:left;width:50%;padding-left:0;padding-right:.25rem;margin-bottom:.25rem;}
.guess ul li:nth-child(2n){padding-left:.25rem;padding-right:0;}
.guess ul li a{display:block;background-color:white;overflow:hidden;padding-bottom:.375rem;}
.guess ul li a aside{display:block;position:relative;}
.guess ul li a aside img{display:block;width:100%;height:auto;}
.guess ul li a aside i{display:block;height:1rem;width:1rem;background-color:#90949d;font-size:.45rem;color:white;border-bottom-right-radius:.25rem;position:absolute;top:0;left:0;line-height:1rem;text-align:center;overflow:hidden;}
.guess ul li a aside i.red{background-color:#fd556c;}
.guess ul li a aside label{display:inline-block;position:absolute;bottom:0;left:0;}
.guess ul li a aside label span{color:white !important;line-height:.7rem !important;font-size:.5rem !important;padding:0 .2rem !important;border-top:0 none !important;margin-bottom:0 !important;height:auto !important;}
.guess ul li a span{border-top:1px solid #f2f2f2;color:#464646;padding:.25rem .25rem 0 .25rem;margin-bottom:.25rem;font-size:.65rem;line-height:.9rem;height:1.8rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;border-top:1px solid #f2f2f2;}
.guess ul li a em{display:inline-block;color:#ff463c;font-size:.75rem;}
.guess ul li a del{display:inline-block;color:#969696;font-size:.6rem;text-decoration:line-through;}

/* �������� */
.alsobuy{padding:.5rem .375rem .5rem .5rem;background-color:white;margin-bottom:.25rem;border-bottom:1px solid #ddd;border-top:1px solid #ddd;}
.alsobuy .arrow_con{padding:0 0 .5rem 0;}
.alsobuy h4{color:#4d525d;font-size:.7rem;line-height:1.2rem;font-weight:normal;float:left;}
.alsobuy h4 span{display:inline-block;margin-left:.5rem;color:#969696;}
.alsobuy .arrow em{color:#969696;font-size:.55rem;height:.8rem;line-height:1.2rem;float:right;display:inline-block;margin-right:.75rem;}
.alsobuy .title_con{position:relative;display:block;height:.8rem;text-align:center;margin-bottom:.4rem;font-size:0;}
.alsobuy .title_con .title{font-size:.6rem;display:inline-block;line-height:.8rem;background-color:#eee;padding:0 1.25rem;position:relative;z-index:2;vertical-align:top;color:#969696;}
.alsobuy .title_con .line{height:0;font-size:0;line-height:0;border-bottom:1px solid #ccc;position:absolute;top:.4rem;left:0;width:100%;z-index:1;}
.alsobuy ul{overflow:hidden;}
.alsobuy ul li{-webkit-box-sizing:border-box;box-sizing:border-box;float:left;width:50%;padding-left:0;padding-right:.25rem;margin-bottom:.25rem;}
.alsobuy ul li:nth-child(2n){padding-left:.25rem;padding-right:0;}
.alsobuy ul li a{display:block;background-color:white;overflow:hidden;padding-bottom:.375rem;}
.alsobuy ul li a img{display:block;width:100%;height:auto;}
.alsobuy ul li a span{border-top:1px solid #f2f2f2;color:#464646;padding:.25rem .25rem 0 .25rem;margin-bottom:.25rem;font-size:.65rem;line-height:.9rem;height:1.8rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;border-top:1px solid #f2f2f2;}
.alsobuy ul li a em{display:inline-block;color:#ff463c;font-size:.75rem;}
.alsobuy ul li a del{display:inline-block;color:#969696;font-size:.6rem;text-decoration:line-through;}

/* ������Ʒ */
.hot{padding:.5rem .375rem .5rem .5rem;background-color:white;margin-bottom:.25rem;border-bottom:1px solid #ddd;border-top:1px solid #ddd;}
.hot h4{color:#4d525d;font-size:.7rem;line-height:1.2rem;font-weight:normal;padding-bottom:.5rem;}
.hot .title_con{position:relative;display:block;height:.8rem;text-align:center;margin-bottom:.4rem;font-size:0;}
.hot .title_con .title{font-size:.6rem;display:inline-block;line-height:.8rem;background-color:#eee;padding:0 1.25rem;position:relative;z-index:2;vertical-align:top;color:#969696;}
.hot .title_con .line{height:0;font-size:0;line-height:0;border-bottom:1px solid #ccc;position:absolute;top:.4rem;left:0;width:100%;z-index:1;}
.hot ul{overflow:hidden;}
.hot ul li{-webkit-box-sizing:border-box;box-sizing:border-box;float:left;width:50%;padding-left:0;padding-right:.25rem;margin-bottom:.25rem;}
.hot ul li:nth-child(2n){padding-left:.25rem;padding-right:0;}
.hot ul li a{display:block;background-color:white;overflow:hidden;padding-bottom:.375rem;}
.hot ul li a img{display:block;width:100%;height:auto;}
.hot ul li a span{border-top:1px solid #f2f2f2;color:#464646;padding:.25rem .25rem 0 .25rem;margin-bottom:.25rem;font-size:.65rem;line-height:.9rem;height:1.8rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;border-top:1px solid #f2f2f2;}
.hot ul li a em{display:inline-block;color:#ff463c;font-size:.75rem;}
.hot ul li a del{display:inline-block;color:#969696;font-size:.6rem;text-decoration:line-through;}

/* ���ﳵռλ */
.space{height:2.75rem;}

/* ���ﳵ */
.shopping_cart{position:fixed;bottom:0;left:0;height:2.75rem;width:100%;background-color:rgba(0,0,0,.8);z-index:2;}
.shopping_cart .cart{position:absolute;top:0;right:0;min-width:2.75rem;height:2.75rem;}
.shopping_cart .cart span{display:block;position:relative;width:1.125rem;height:1.125rem;text-indent:-999rem;background:url(/static/images/icon_shoppingcart.png) center center no-repeat;background-size:contain;margin:.8125rem auto;}
.shopping_cart .cart span i{display:none;position:absolute;top:-0.4rem;left:.7rem;min-width:.8rem;height:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box;border:.05rem solid white !important;border-radius:.4rem;background-color:#fe435d;color:white;font-size:.55rem;line-height:.7rem;text-indent:0;text-align:center;padding:0 .125rem;}
.shopping_cart .btn_con{margin:.3rem 2.75rem .3rem .5rem;height:2.15rem;}
.shopping_cart .btn_con button{display:block;height:100%;float:left;border-radius:.15rem;font-size:.8rem;color:white;font-weight:bold;}
.shopping_cart .btn_con .add{width:55%;margin-right:5%;background-color:#fe435d;}
.shopping_cart .btn_con .buy{width:40%;background-color:#89a0b6;}
.shopping_cart .btn_con .buy.big{width:100%;}
.shopping_cart .btn_con p{font-size:.7rem;color:#fe435d;font-weight:bold;line-height:2.15rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}

/* 购物车数量 */
.shopping_alert{
    width:100%; 
    height:300px; 
    background-color:rgb(247, 247, 247);
    position: absolute;
    bottom: 0;
    border-top:2px solid rgb(255, 70, 90)
}
.shopping_alert .good{
    width: 100%;
    height: 5rem;
    padding: 8px;
}
.shopping_alert .good .good_img{
    width: 20%;
    height: 100%;
    float: left;
}
.shopping_alert .good .good_img img{
    height:4.5rem;
}

.shopping_alert .good .good_message{
    width: 70%;
    padding-top: 8px;
    margin-left: 5rem;
}

.shopping_alert .good .good_message .good_title{
    display:inherit;
    height: 2em;
    line-height:2rem;
    
}
.shopping_alert .good .good_message .good_price{
    color: rgb(255, 70, 90);
    float: left;
    display:inherit;
    height: 2em;
    line-height:2rem;
    margin-top: 5px;
    
}
.shopping_alert .good .good_message .good_kucun{
    float: left;
    display:inherit;
    height: 2em;
    line-height:2rem;
    padding-left: 5rem;
    margin-top: 5px;
}

.shopping_alert .good .close{
    width: 10%;
    position: absolute;
    top: 0;
    right: 0;;
}

.shopping_alert .guige{
    width: 100%;
    height: 130px;
}
.count{
    height: 2.5rem;
    line-height: 2.5rem;
}
.count .tips{
    float: left;
    margin-left: 20px;
}
.count .compute{
   float: right;
   margin-right: 20px;
}
.count .compute button,input{
    width: 1.5rem;
    height: 1.5rem;
}
.count .compute input{
    width: 2.5rem
}

.gobuy div{
    height: 3rem;
    float: left;
    line-height: 3rem;
    padding: 0 8px;
    text-align: center;
    border-top:1px solid #ccc;
}
.gobuy .services{
    width: 20%;
    border-right:1px solid #ccc;
}
.gobuy .cartview{
    width: 20%;
    border-right:1px solid #ccc;    
}
.gobuy .buynow{
    color: #fff;
    width: 30%;
    background-color: #ED5564    
}
.gobuy .addtocart{
    color: #fff;
    width: 30%;
    background-color: #FB6E52
}
/* ͼ������ */
.tab{border-bottom:1px solid #ddd;margin-bottom:.25rem;background-color:white;}
.tab .box{display:-webkit-box;display:-moz-box;display:box;width:100%;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-ms-box-orient:horizontal;box-orient:horizontal;}
.tab .box li{width:1rem;-webkit-box-flex:1;-moz-box-flex:1;-ms-box-flex:1;box-flex:1;overflow:hidden;}
.tab.book .box li{width:auto;}
.tab .box li a{display:block;text-align:center;font-size:.7rem;color:#4c535d;padding:.5rem 0;line-height:1rem;}
.tab .box li a:visited{color:#4c535d;}
.tab .box li a p{display:block;border-left:1px solid #ddd;}
.tab .box li:first-child a p{border-left:0 none;}
.tab .box li.on a{color:#fe435d;}
.tab .box li.on a:visited{color:#fe435d;}
.tab .box li a em{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:0 .375rem;position:relative;}
.tab .box li a em::after{content:"";position:absolute;bottom:-0.5rem;left:0;width:100%;font-size:0;line-height:0;height:.1rem;background-color:white;}
.tab .box li.on a em:after{background-color:#fe435d;}
.area{background-color:white;display:none;font-size:.7rem;color:#797d85;}
.area .detail_list dl{overflow:hidden;}
.area .detail_list dl dt{display:inline-block;float:left;}
.area .detail_list dl dd{display:inline-block;float:right;}

/* ������ */
.area.empty{background-color:#eee;}
.empty p{text-align:center;display:block;background:url(/static/images/empty.png) center 1rem no-repeat;background-size:7.175rem 7rem;padding:8.5rem 0;color:#454c5b;font-size:.6rem;}


/* ���͵��� */
.select_box{visibility:hidden;position:fixed;bottom:0;left:0;width:100%;z-index:10;background-color:white;}
.select_box dl{width:100%;overflow: hidden;position: relative;}
#regionScroller {overflow: hidden;position: relative;height: 250px}
.select_box .title,.select_box dl dd{overflow:hidden;display:block;border-top:1px solid #e2e2e2;}
.select_box .title{position:relative;}
.select_box .title a{display:block;height:2.25rem;position:absolute;top:0;text-indent:-99rem;}
.select_box .title a.back{display:none;width:1.45rem;left:0;background:url(/static/images/goback.png) center center no-repeat;background-size:.45rem .8rem;}
.select_box .title a.close{width:1.675rem;right:0;background:url(/static/images/close.png) center center no-repeat;background-size:.675rem .675rem;}
.select_box .title span{margin:0 1.675rem 0 1.45rem;text-align:center;overflow:hidden;color:#4d525d;font-size:.8rem;line-height:2.25rem;display:block;text-overflow:ellipsis;white-space:nowrap;}
.select_box dl dd{text-indent:.5rem;line-height:2.25rem;color:#4d525d;font-size:.7rem;}
.select_box dl dd.on{color:#fe435d;}

/* �鿴��ͼ */
.bigpic{width:100%;height:100%;position:fixed;top:0;left:0;background-color:#4d525d;display:table;z-index:999}
.bigpic .cell{display:table-cell;vertical-align:middle;width:100%;height:100%;}
.bigpic .cell .turn{padding-bottom:.5rem;}
.bigpic .cell .turn .dot{position:static;font-size:0;line-height:0;padding:.25rem 0;}
.bigpic .cell .turn .left{position:absolute;bottom:0;left:0;background:url(/static/images/bigpic_icon1.png) center bottom no-repeat;background-size:.8rem 1rem;display:block;width:1.8rem;height:1.8rem;text-indent:-99rem;}
.bigpic .cell .turn .right{position:absolute;bottom:0;right:0;background:url(/static/images/bigpic_icon2.png) center bottom no-repeat;background-size:.85rem .8rem;display:block;width:1.85rem;height:1.85rem;text-indent:-99rem;}
.turn .tip::after{content: "";width: 2.75rem;height: 100%;border-left: 1px solid #f7f9fa;background: url(/static/images/pull.png) #eee center center no-repeat; background-size: 1.95rem 6rem; position: absolute; right: 0; top: 0; display: block;
}
/* ����� */
.product_list{background-color:white;margin-top:.25rem;margin-bottom:.25rem;}
.product_list ul li{border-bottom:1px solid #e1e1e1;}
.product_list ul li a{display:block;}
.product_list .wrap{position:relative;}
.product_list .wrap dt{display:block;position:absolute;top:0;left:0;width:3rem;height:3rem;}
.product_list .wrap dt img{width:100%;height:auto;}
.product_list .wrap dd{display:block;margin-left:3.5rem;margin-right:.75rem;height:3rem;position:relative;}
.product_list .wrap dd em{color:#3c3c46;font-size:.7rem;line-height:.8rem;height:1.6rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;word-break:break-all;}
.product_list .wrap dd i{font-size:.75rem;position:absolute;bottom:0;left:0;line-height:.75rem;color:#fe435d;}

/* һƷ���� */
.filter{background-color:white;margin-bottom:.25rem;}
.filter ul{overflow:hidden;}
.filter ul li{width:50%;float:left;}
.filter ul li a{display:block;text-align:center;border-bottom:.1rem solid white;font-size:.7rem;color:#4d525d;line-height:1.8rem;}
.filter ul li a:visited{color:#4d525d;}
.filter ul li.on a{border-bottom:.1rem solid #fe435d;color:#fe435d;}
.filter ul li.on a:visited{color:#fe435d;}
.filter ul li a em i{position:relative;top:-0.1rem;left:0.1rem;border-style:solid;display:inline-block;width:0;height:0;font-size:0;line-height:0;}
.filter ul li a em i.arrow_up{top:-0.3rem;left:.2rem;border-color:#fff #fff #454c5b #fff;border-width:0 .2rem .2rem .2rem;}
.filter ul li a em i.arrow_down{top:0;left:-0.2rem;border-color:#454c5b #fff #fff #fff;border-width:.2rem .2rem 0 .2rem;}
.filter ul li a em i.arrow_up.active{border-color:#fff #fff #fe435d #fff;}
.filter ul li a em i.arrow_down.active{border-color:#fe435d #fff #fff #fff;}
.company_list ul li{border-top:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;margin-bottom:.25rem;background-color:white;}
.company_list ul li a{display:block;}
.company_list .wrap{position:relative;min-height:1.7rem;}
.company_list .wrap img{display:block;width:1.7rem;border-radius:.15rem;position:absolute;top:0;left:0;}
.company_list .wrap span{display:block;width:4rem;position:absolute;top:0;right:0;height:100%;margin-right:.75rem;}
.company_list .wrap i{display:table;font-size:.75rem;color:#fe435d;font-weight:bold;height:100%;width:100%;text-align:right;}
.company_list .wrap i em{display:table-cell;vertical-align:middle;}
.company_list .wrap dl{margin:0 4.5rem 0 2.2rem;display:block;}
.company_list .wrap dl dt{font-size:.8rem;color:#454c5b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;}
.company_list .wrap dl dd{font-size:.55rem;color:#969696;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;line-height:.6rem;margin-top:.1rem;}
/* ��ͷ */
.filter ul li a em i.up{border-width:0 .2rem .2rem .2rem;border-color:#fff #fff #fe435d #fff;}
.filter ul li a em i.down{border-width:.2rem .2rem 0 .2rem;border-color:#fe435d #fff #fff #fff;}

/* �����б� */
.author_list{background-color:white;margin-top:.25rem;margin-bottom:.25rem;}
.author_list ul li{border-bottom:1px solid #e1e1e1;}
.product_list ul li a{display:block;}
.author_list .wrap{color:#3c3c46;font-size:.7rem;line-height:1rem;padding-right:1rem;}

/* 404����ҳ */
.error404{background-color:transparent;font-size:.7rem;color:#797d85;}
.error404 span{text-align:center;display:block;background:url(/static/images/empty.png) center 3.5rem no-repeat;background-size:7.175rem 7rem;padding-top:11rem;color:#454c5b;font-size:.6rem;}

/* ������ */
.page_loading{margin:0 .5rem .5rem .5rem;background-color:white;font-size:.6rem;text-align:center;line-height:2rem;display:none;}

/* common pop */
.popup{display:none;width:100%;height:100%;position:fixed;top:0;left:0;z-index:10;}
.popup .box{display:table;width:100%;height:100%;text-align:center;}
.popup .box .cell{display:table-cell;vertical-align:middle;}
.popup .box .cell .con{margin:0 .8rem;overflow:hidden;}
.popup.Pop .box .cell .con{display:inline-block;line-height:2.5rem;background-color:rgba(0,0,0,.7);font-size:.7rem;color:white;}
.popup.Alert .box .cell .con{display:block;background-color:white;}
.popup.Confirm .box .cell .con{display:block;background-color:white;}
.popup .box .cell .con .title{display:block;font-size:.75rem;color:#58595b;margin-bottom:.5rem;padding-top:1rem;}
.popup.Pop .box .cell .con .info{padding:0 1.25rem;}
.popup.Alert .box .cell .con .info{display:block;font-size:.75rem;color:#9a9a98;line-height:1.1rem;margin-bottom:.5rem;padding:0 1.25rem;}
.popup.Confirm .box .cell .con .info{display:block;font-size:.75rem;color:#9a9a98;line-height:1.1rem;margin:1.75rem 0;padding:0 1.25rem;}
.popup .box .cell .con .btn{background-color:transparent;display:block;border-top:1px solid #dcdcdc;color:#58595b;font-size:.8rem;padding:.375rem 0;float:left;}
.popup .box .cell .con .btn:active,.popup .box .cell .con .btn:hover,.popup .box .cell .con .btn:focus{background-color:#f2f2f2;}
.popup .box .cell .con .btn em{line-height:1.5rem;display:block;}
.popup .box .cell .con .btn.determine{width:100%;}
.popup .box .cell .con .btn.ok{width:50%;}
.popup .box .cell .con .btn.ok em{border-left:1px solid #dcdcdc;}
.popup .box .cell .con .btn.cancel{width:50%;}
</style>
