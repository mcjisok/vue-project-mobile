<template>
    <div class="buy_step1">
        <Topbar title="结算"></Topbar>
        <!-- 收件信息 -->
        <div class="address">
            <div class="address_icon"></div>
            <div class="address_msg" v-if="address != null">
                <p class="address_per">收货人：{{address.person_name}} {{address.person_mobnum}}</p>
                <p class="address_detail">地址：{{address.person_address_detail}}</p>
            </div>
            <div class="address_msg" v-if="address === null">
                <p class="address_add">请添加你的收货地址</p>                
            </div>
        </div>
        <!-- 支付方式 -->
        <div class="pay_method">
            <div class="od_title">支付方式</div>
            <div class="pay">
                <div class="pay_wechat">
                    <span></span>
                </div>
                <div class="wechat_method">
                    <div class="box">
                        <p class="method_title">微信支付<span>推荐</span></p>
                        <p>推荐已在微信用户使用</p>
                    </div>
                     <!-- <div class="wechat_radio"> -->
                        <input type="radio" id="one" value="wechat" v-model="pay_method_picked">
                    <!-- </div>                     -->
                </div>
               
            </div>
            <div class="pay">
                <div class="pay_zfb">
                    <span></span>
                </div>
                <div class="zfb_method">
                    <div class="box">
                        <p class="method_title">支付宝</p>
                        <p>安全快捷，可支持银行卡支付</p>
                    </div>
                    <!-- <div class="wechat_radio"> -->
                        <input type="radio" id="two" value="zfb" v-model="pay_method_picked">
                    <!-- </div> -->
                </div>                
            </div>            
        </div>

        <!-- 订单信息 -->
        <div class="order_list">
            <div class="od_title">订单信息</div>
            <div class="od_list">
                <div class="od_msg" v-for="(item,index) in goodlist">
                    <div class="od_box">
                        <div class="od_goodimg">
                            <img :src="api + item.goodID[0].product_poster[0]" alt="" width="100%">
                        </div>
                        <div class="od_goodmsg">
                            <a href="">{{item.goodID[0].product_title}}</a>
                            <p>￥{{item.goodID[0].product_price}} <span>x{{item.good_count}}</span></p>
                        </div> 
                    </div>
                    <div class="od_price_total">
                        <p>小计：<span>￥{{item.goodID[0].product_price * item.good_count}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="order_message">
            <input type="text" placeholder="买家留言200字以内（选填）">
        </div>
        <div class="od_total">
            <p>商品总额：<span>￥{{totalprice}}</span></p>
            <p>订单总计：<span class="od_total_price">￥{{totalprice}}</span></p>
        </div>
        <div class="od_to_pay">
            <div class="pricetotal">
                <p>总计:￥{{totalprice}}</p>
                <p>运费:￥{{totalprice}}</p>
            </div>
            <div class="pay_btn">
                <a href="">支付订单</a>
            </div>
        </div>
    </div>
</template>

<script>
import Topbar from '../Topbar.vue'
import { setCookie,getCookie } from '../../assets/js/cookie'
import {mapGetters, mapActions ,mapState} from 'vuex'

export default {
    data (){
        return{
            api:this.GLOBAL.host,
            userid:getCookie('userid'),
            getAddressapi:this.GLOBAL.host + '/vue_api/getAddress',
            getCart_apiurl : this.GLOBAL.host + '/vue_api/getToOrderGoodList',   
            pay_method_picked:'wechat',
            address:'',   
            goodlist:'',   
            totalprice:'',     
            
        }
    },
    components:{
        Topbar
    },
    // computed: mapState([
    //     // 映射 this.count 为 store.state.count
    //     'toOrderList'
    // ]),
    computed:{
        // 本地计算属性
        // totalprice(){
        //     var totalprice = 0;
        //     for (let i = 0; i < this.goodlist.length; i++) {
        //         let e = this.goodlist[i].good_count * this.goodlist[i].good_price
        //         totalprice += e   
        //     }
        //     return totalprice
        // },
        // vuex中的计算属性
        ...mapState([
            'toOrderList'
        ])
    },
    methods:{
        getAddress:function(){
            this.$http.post(this.getAddressapi,{
                userid:this.userid
            }).then(function(data){
                this.address = data.body
                // console.log(this.toOrderList)
            })
        },
        get_toOrderList:function(){
            this.$http.post(this.getCart_apiurl,{
                cartidlist:this.toOrderList
            }).then(function(data){
                // console.log(data)
                this.goodlist = data.body
                console.log(this.goodlist)
                var a = 0;
                for (let i = 0; i < this.goodlist.length; i++) {
                    let e = this.goodlist[i].good_count * this.goodlist[i].good_price
                    a += e   
                }
                this.totalprice = a
            })
        }
    },
    mounted:function(){
        this.getAddress()
        this.get_toOrderList()
    }
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
.address{
    width: 100%;
    height: p2r(165);
    margin-top: p2r(73);
    border-bottom: 2px solid rgb(250, 26, 164);
    
    // background: #ccc;
    .address_icon{
        width: p2r(45);
        height: p2r(45);
        background: red;
        background: url(/static/images/dy.png) no-repeat;
        background-size: p2r(45) p2r(45);
        margin-top:p2r(60);
        margin-left: p2r(20);
        float: left;
    }
    .address_msg{
        width: p2r(505);
        float: left;
        margin-left: p2r(30);
        .address_per{
            height: p2r(70);
            line-height: p2r(70);
            font-size: 1rem;
        }
        .address_detail{
            height: p2r(70);
            font-size: 0.8rem;
            color: #e3e3e3;
        }
        .address_add{
            height: p2r(165);
            line-height: p2r(165);
            font-size: 0.8rem;
            color: #ccc;
            
        }
    }
}
.od_title{
    width: 100%;
    height: p2r(70);
    line-height: p2r(70);
    color: #ccc;
    padding-left: p2r(20);
}
.pay_method{
    width:100%;
    height:p2r(345);
    border-top: p2r(18) solid #f2f2f2;
    top: p2r(240);
    
    .pay{
        width: 100%;
        height: p2r(95);
        .method_title{
            font-size: 1rem;
            color: #000;
            margin-top:p2r(10);
            span{
                width: p2r(53);
                height: p2r(26);
                margin-left: p2r(20);
                font-size: 0.6rem;
                line-height: p2r(25);
                background-color: rgb(255, 217, 242);
                color: rgb(255, 51, 112);
                border-color: rgb(255, 51, 112);  
                border-radius: p2r(5);              
                padding: 0 p2r(10);
            }
        }
        .box{
            width: p2r(440);
            height: p2r(95);
            float: left;
        }
        input{
            outline:none;
            width: p2r(40);
            height: p2r(40);
            margin-top:p2r(27.5);
            border:1px solid #ccc;
            border-radius: p2r(30);
            -webkit-tap-highlight-color: #fff;
        }
        input:checked{
            border:none;
            background-image: url(/static/images/radio.png);
            background-size: p2r(40) p2r(40);
            border-color: #fff;
        }
        .pay_wechat{
            width: p2r(100);
            height: p2r(95);
            float: left;
            span{
                display: block;
                width: p2r(56);
                height: p2r(56);
                background:url(/static/images/wechat.png) no-repeat;
                background-size: p2r(56) p2r(56);
                margin:p2r(20) auto;
                line-height: p2r(95);
                
            }
        }
        .pay_zfb{
            width: p2r(100);
            height: p2r(95);
            float: left;
            span{
                display: block;
                width: p2r(56);
                height: p2r(56);
                background:url(/static/images/zfb.png) no-repeat;
                background-size: p2r(56) p2r(56);                
                line-height: p2r(95);
                margin:p2r(20) auto;
            }            
        }
        .wechat_method{
            float: left;
            width: p2r(540);
            height: p2r(95);
            border-bottom: 1px solid #eee;
        }
        .zfb_method{   
            float: left;         
            width: p2r(540);
            height: p2r(95);
            border-bottom: 1px solid #eee;
            
        }
    }
}

.order_list{
    width: 100%;
    border-top:p2r(18) solid #f2f2f2;
    .od_msg{
        width: 100%;
        height: p2r(275);
        .od_box{
            width: 100%;
            height: p2r(180);
            .od_goodimg{
                width: p2r(168);
                height: p2r(168);
                margin-left:p2r(20);
                float: left;
            }
            .od_goodmsg{
                width: p2r(420);
                height: p2r(180);
                padding-left: p2r(20);
                float: left;
                p{
                    margin-top: p2r(35);
                    span{
                        float: right;
                    }
                }
            }
        }
        .od_price_total{
            width: p2r(600);
            height: p2r(65);
            margin:0 auto;
            border-bottom: 1px solid #e3e3e3;
            p{
                float: right;
                line-height: p2r(65);
                padding-right: p2r(20);
                span{
                    color: red;
                }
            }
        }
    }
}

.order_message{
    width: p2r(600);
    height: p2r(95);
    margin:0 auto;
    border-bottom: 1px solid #e3e3e3;    
    input{
        width: p2r(600);
        height: p2r(65);
        line-height: p2r(65);
        background-color: #f2f2f2;
        border-radius: p2r(5);
        padding-left: p2r(20);
    }
}

.od_total{
    width:p2r(600);
    margin:0 auto;
    height: p2r(220);
    p{
        width: 100%;
        height: p2r(50);
        line-height: p2r(50);
        color:#ccc;
        .od_total_price{
            color:rgb(255, 46, 143);
            font-size: 0.9rem;
        }
        span{
            float: right;
            
        }
    }
}
.od_to_pay{
    width: 100%;
    height: p2r(100);
    position: fixed;
    bottom: 0;
    .pricetotal{
        width: p2r(450);
        height: p2r(100);
        background-color: #fff;
        float: left;
        p{
            line-height: p2r(50);
            text-align: right;
            padding-right:p2r(15);
        }
        p:first-child{
            font-size: 0.8rem;
            color: rgb(255, 46, 143);
        }
    }
    .pay_btn{
        width: p2r(190);
        height: p2r(100);
        line-height: p2r(100);
        background-color: rgb(255, 46, 143);
        text-align: center;
        a{
            font-size: 1rem;
            color: #fff;
        }
        float: left;
    }
}
</style>
