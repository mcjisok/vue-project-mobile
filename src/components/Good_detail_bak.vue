<template>
    <div class="good_detail">
        <div class="good_mainimg">
            <!-- <ul>
                <li><a href="javascript:;"><img src="static/images/1171914525-1_b.jpg" alt="" width="100%"></a></li>
            </ul> -->
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(imgurl,index) in detail.product_poster"><img :src="Api + imgurl" alt="" width="100%"></mt-swipe-item>
                <!-- <mt-swipe-item><img src="static/images/1171914525-1_b.jpg" alt="" width="100%"></mt-swipe-item>
                <mt-swipe-item><img src="static/images/1171914525-1_b.jpg" alt="" width="100%"></mt-swipe-item> -->
            </mt-swipe>
        </div>
        <section class="good_price">
            <p><span class="rmb">￥</span>{{detail.product_price}} <span class="old_price">￥999.90</span></p>
        </section>
        <section class="good_title">
            <p class="good_title_text">{{detail.product_title}}</p>
        </section>

        <section class="good_description">
            <p class="description_text">
                {{detail.product_content}}
            </p>
        </section>

        <div class="border_style"></div>

        <section class="good_coupon">
            <p>领取优惠券<span>></span></p>
        </section>

        <div class="border_style"></div>

        <section class="store">
            <div class="store_head">
                <div class="store_tx"><a href="javascript:;"><img src="static/images/1171914525-1_b.jpg" alt="店铺头像"></a></div>
                <div class="store_name">
                    <p>法国奢侈品</p>
                </div>
                <div class="store_collect">收藏</div>
            </div>

            <ul class="store_good_list">
                <li class="store_goodmsg">
                    <div class="good_listimage"><a href="javascript:;"><img src="static/images/2011111810580945.jpg" alt=""></a>
                    </div>
                    <div class="good_listtile">
                        <a href="javascript:;">商品标题商品标</a>
                    </div>
                    <div class="good_listprice">
                        <p>￥999.00</p>
                    </div>
                </li>
                <li class="store_goodmsg">
                    <div class="good_listimage"><a href="javascript:;"><img src="static/images/2011111810580945.jpg" alt=""></a>
                    </div>
                    <div class="good_listtile">
                        <a href="javascript:;">商品标题商标题</a>
                    </div>
                    <div class="good_listprice">
                        <p>￥999.00</p>
                    </div>
                </li>
                <li class="store_goodmsg">
                    <div class="good_listimage"><a href="javascript:;"><img src="static/images/2011111810580945.jpg" alt=""></a>
                    </div>
                    <div class="good_listtile">
                        <a href="javascript:;">商品标题商品标</a>
                    </div>
                    <div class="good_listprice">
                        <p>￥999.00</p>
                    </div>
                </li>
                <li class="store_goodmsg">
                    <div class="good_listimage"><a href="javascript:;"><img src="static/images/2011111810580945.jpg" alt=""></a>
                    </div>
                    <div class="good_listtile">
                        <a href="javascript:;">商品标题商品题</a>
                    </div>
                    <div class="good_listprice">
                        <p>￥999.00</p>
                    </div>
                </li>
            </ul>
        </section>        

        <div class="border_style"></div>
        
        <section class="good_detail">
            <div class="good_tips">上拉查看图文详情</div>
            <div class="detail_tabbtn">
                <div class="imgdetail">图文详情</div>
                <div class="good_msg">商品参数</div>
            </div>
            <div class="detail_content">
                <Goodimgtext :imglist='imglist'></Goodimgtext>
            </div>
        </section>

        <section class="detail_footbar">
            <a href="javascript:;" class="sc"></a>
            <router-link to="/shopping_cart" class="gotocart"><span>2</span></router-link>
            <div class="addtocart"><a href="javascript:;" @click="checkpopup()">加入购物车</a></div>
            <div class="gotobuy"><a href="javascript:;">立即购买</a></div>
        </section>
        <!-- 购物车popup组件 -->
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="popup_addcart">
                <div class="cart_detail">
                    <div class="good_msg">
                        <div class="good_mainimg">
                            <img :src="Api + this.detail.product_poster" alt="" width="100%">
                            <!-- <img v-else-if="this.detail.product_poster.length > 1 " :src="Api + this.detail.product_poster[0]" alt="" width="100%">                             -->
                        </div>
                        <div class="good_title_price">
                            <p class="good_title">{{this.detail.product_title}}</p>
                            <span class="good_price">￥{{this.detail.product_price}}</span>
                            <span class="good_stock">库存：{{this.detail.product_stock}}</span>
                        </div>
                    </div>
                    <div class="guige"></div>
                    <div class="count">
                        <span class="tips">购买数量</span>
                        <div class="compute">
                            <a href="javascript:;" class="minu" @click="minus()">-</a>
                            <input type="text" v-model.number="cart_count">
                            <a href="javascript:;" class="add" @click="add()">+</a>
                        </div>
                    </div>
                </div>
                <section class="detail_footbar">
                    <a href="javascript:;" class="sc"></a>
                    <router-link to="/shopping_cart" class="gotocart"><span>2</span></router-link>                    
                    <div class="addtocart"><a href="javascript:;" @click="addtocart()">加入购物车</a></div>
                    <div class="gotobuy"><a href="javascript:;">立即购买</a></div>
                </section>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import { Swipe, SwipeItem, Popup,Toast  } from 'mint-ui';
import Goodimgtext from "./detail/Good_imgtext";
import Search from './Searchbar.vue'
import { mapGetters } from '../../node_modules/_vuex@3.0.1@vuex';
import { setCookie,getCookie } from '../assets/js/cookie'
export default {
    data () {
        return {
            detail:[],
            imglist:'',
            good_number:1,
            good_price:0,
            gooddetail_api:this.GLOBAL.host + '/vue_api/gooddetail/',
            addtocart_api:this.GLOBAL.host + '/vue_api/addtocart',
            shoppingshow:false,
            Api:this.GLOBAL.host,
            popupVisible:false,
            cart_count:1
        }
    },
    components:{
        Swipe, 
        SwipeItem,
        Popup,
        Goodimgtext,
        Search
        
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
                this.imglist = this.detail.product_detailimg
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
        checkpopup:function(){
            this.popupVisible = !this.popupVisible
        },
        minus:function(){
            if(this.cart_count > 1){
                this.cart_count --
            }
        },
        add:function(){
            this.cart_count ++
        },
        addtocart:function(){
            if(this.getisLogin === true){
                var goodID = this.$route.params.id            
                var userID = getCookie('userid')
                console.log(userID)
                var storeID = this.detail.store_id
                var good_count = this.cart_count
                this.$http.post(
                this.addtocart_api,
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
                        Toast({
                            message: '提示',
                            position: 'middle',
                            className:'toast',
                            duration: 1000
                        });

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

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};


.good_detail{
    .toast{
        z-index: 9999;
        color: red;
    }
    width: 100%;
    // 灰色间隔
    .border_style{
        width: 100%;
        height: p2r(20);
        background-color: #f1f1f1;
    }
    .good_mainimg{
        width: 100%;
        height: p2r(640);
    }

    .good_price{
        width: 100%;
        height: p2r(100);
        line-height: p2r(100);
        padding: 0 p2r(20);
        p{
            font-size:p2r(35);
            color: red;
            border-bottom: 1px #f1f1f1 solid;
        }
        .rmb{
            font-size: p2r(20);
            color: red;
        }
        .old_price{
            font-size: p2r(20);
            color: #ccc;
            text-decoration: line-through;
        }
    }

    .good_title{
        width: 100%;
        height: p2r(140);
        padding: p2r(40) p2r(20) 0 p2r(20);
        .good_title_text{
            font-size: p2r(25);
            font-weight: 600;
            line-height: p2r(33);
        }
    }
    .good_description{
        width: 100%;
        min-height: p2r(100);
        max-height: p2r(140);
        padding: 0 p2r(20);
        overflow: hidden; 
        
        .description_text{
            width: p2r(600);
            font-size: p2r(25);            
            // 自动换行
            word-wrap:break-word;  
            word-break:break-all;  
            overflow: hidden; 
        }
    }
    .good_coupon{
        width: 100%;
        height: p2r(70);
        border-bottom: 1px solid #f1f1f1;
        p{
            line-height: p2r(70);
            padding:0 p2r(20);
            color: rgb(255, 123, 0);
            font-size: p2r(20);            
            span{
                float: right;
            }
        }
    }

    .store{
        width: 100%;
        height: p2r(420);
        .store_head{
            width: 100%;
            height: p2r(138);
            padding: p2r(26) p2r(20) 0 p2r(20);

            .store_tx{
                width: p2r(85);
                height: p2r(85);
                float: left;
                a{
                    display: block;
                    img{
                        width: p2r(85);
                        height: p2r(85);
                    }
                }
            }
            .store_name{
                width: p2r(400);
                height: p2r(85);
                line-height: p2r(85);
                float: left;
                padding-left: p2r(20);
            }
            .store_collect{
                width: p2r(95);
                height: p2r(45);
                margin-top: p2r(25);
                border: 1px solid rgb(255, 123, 0);
                border-radius: p2r(8);
                line-height: p2r(40);
                text-align: center;
                color: rgb(255, 123, 0);
                float: right;
            }
        }

        .store_good_list{
            width: 100%;
            // overflow: hidden;
            padding: p2r(20) 0 0 0;
            .store_goodmsg{
                width: p2r(160);
                float: left;

                .good_listimage{
                    width: p2r(140);
                    height: p2r(140);
                    img{
                        width: p2r(140);
                        height: p2r(140);
                    }
                }
                .good_listtile{
                    font-size: p2r(20);
                    line-height: p2r(30);
                    text-align: center;
                }
                .good_listprice{
                    margin-top: p2r(18);
                    text-align: center;
                    color: rgb(255, 123, 0);
                }
            }
        }
    }

    .good_detail{
        width: 100%;
        .good_tips{
            width: 100%;
            height: p2r(72);
            line-height: p2r(72);
            text-align: center;
            color: #ccc;
        }
        .detail_tabbtn{
            width: p2r(566);
            height: p2r(65);
            margin: p2r(30) auto p2r(85) auto;
            border:p2r(2) solid #333;
            border-radius: p2r(10);  
            div{
                text-align: center;
                line-height: p2r(65);
            }
            .imgdetail{
                float: left;
                width: 50%;
            }     
            .good_msg{
                float: left;
                width: 50%;
            }     
        }
    }

    .detail_footbar{
        width: 100%;
        height: p2r(85);
        position: fixed;
        bottom: 0;
        background-color: red;
        a{
            display: block;
            width: p2r(85);
            height: p2r(85);
            float: left;
            background-color: #f1f1f1;
            border-right: 1px solid #ccc;
        }
        .sc{
            background: url(/static/images/sc.png) no-repeat #fff;
            background-size: p2r(85) p2r(85);
        }
        .gotocart{
            background: url(/static/images/gwc.png) no-repeat #fff;
            background-size: p2r(85) p2r(85);
            span{
                display: block;
                width: p2r(26);
                height: p2r(26);
                font-size: p2r(20);
                line-height: p2r(22);
                text-align: center;
                background-color: red;
                color: #fff;
                border-radius: 50%;
                position: relative;
                top: p2r(5);
                left: p2r(50);
            }
        }
        .addtocart{
            width: p2r(235);
            height: p2r(85);
            float: left;
            a{
                width: p2r(235);
                height: p2r(85);
                line-height: p2r(85);
                text-align: center;
                background-color: #ff9d15;
                color: #fff;
                border: none;
            }
        }
        .gotobuy{
            width: p2r(235);
            height: p2r(85);
            float: left;
            a{
                width: p2r(235);
                height: p2r(85);
                line-height: p2r(85);
                text-align: center;
                background-color: #ff2020;
                color: #fff;
                border: none;
            }
        }
    }
    .popup_addcart{
        width: p2r(640);
        // height: p2r(500);
        .cart_detail{
            width:100%;
            margin-bottom: p2r(85);
            .good_msg{
                width: 100%;
                height: p2r(220);
                border-bottom: 1px solid #e1e1e1;
                .good_mainimg{
                    width: p2r(210);
                    height: p2r(210);
                    float: left;
                    img{
                        width: p2r(180);
                        height: p2r(180);
                        margin: p2r(20) 0 0 p2r(20);
                        border: 1px solid #e1e1e1;
                    }
                }
                .good_title_price{
                    width: p2r(430);
                    height: p2r(210);
                    float: left;
                    .good_price{
                        color: #ff9d15;
                    }
                    .good_stock{
                        margin-left: p2r(50)
                    }
                }
            }
            .count{
                width: 100%;
                height: p2r(120);
                line-height: p2r(120);
                .tips{
                    width: p2r(160);
                    float: left;
                    text-align: center;
                }
                .compute{
                    width: p2r(480);
                    float: right;
                    height: p2r(120);
                    line-height: p2r(120);
                    // margin-left: p2r(100);
                    padding-top: p2r(40);
                    padding-left: p2r(280);
                    a{
                        float: left;
                        display: block;
                        height: p2r(38);
                        line-height: p2r(38);
                        width: p2r(50);
                        text-align: center;
                        border: 1px solid #e2e2e2;
                    };
                    a:active{
                        border: 1px solid #ccc;                        
                    }
                    input{
                        width: p2r(70);
                        float: left;
                        height: p2r(38);
                        line-height: p2r(38);
                        border: 1px solid #e2e2e2;    
                        text-align: center;                        
                    }
                }
                
            }
        }
    }
}
</style>
