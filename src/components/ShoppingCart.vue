<template>
    <div class="shoppingcart">
        <topbar title="购物车"></topbar>
        <div class="shop" ref="shop" >
            <!-- <div class="shopname">
                <mt-checklist
                    :title="shop_title"
                    v-model="value"
                    :options="['选项A']">
                </mt-checklist>
            </div> -->
            <div v-if="getisLogin" class="content" >
                <div class="goodlist" v-for="(item,index) in goodlist" :goodid="item._id">
                    <div class="goodmsg">
                        <div class="inputcheck">
                            <input type="checkbox" class="check" name="" id="" :value="index" v-model="checkedNames">
                        </div>
                        <img :src="Api + item.goodID[0].product_poster" alt="">
                        <div class="gooddetail">
                            <div class="gooddetail_top">
                                <p class="good_title">
                                    <router-link :to="'/detail/' + item.goodID[0]._id">{{item.goodID[0].product_title}}</router-link>
                                </p>
                                <div class="good_del">
                                    <a href="javascript:;" @click="good_del(item._id,index)"></a>
                                </div>
                            </div>
                            <div class="jine">
                                <p class="good_price">￥{{item.goodID[0].product_price}}</p>
                                <p class="good_freight">运费:{{item.goodID[0].product_freight}}</p>   
                            </div>                                             
                            <div class="count">
                                <a href="javascript:;" class="minu" @click="minus(item._id,index)">-</a>
                                <input type="text" v-model.number="item.good_count" v-on:input="setcount(item._id,index)">
                                <a href="javascript:;" class="add" @click="add(item._id,index)">+</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box"></div>                
            </div>
            <div v-else class="content">
                <div class="login_remind">
                    <p>您尚未登录，请先登录！<router-link to="/login">前往登录</router-link></p>
                </div>
            </div>
            <!-- {{checkedNames}}
            {{isall}} -->
            
        </div>
        <footer class="shopcartfoot">
            <div class="checkboxAll">
                <input type="checkbox" class="check" name="checkAll" :checked="isall" @click="checkAll">
                <label for="checkAll"  >全选</label>
            </div>
            <div class="total">
                <p class="total_price">合计:<span>￥{{total_price}}</span></p>
                <br>
                <p class="total_freight">运费:<span>￥{{total_freight}}</span></p>
            </div>
            <div class="to_order" :class="{to_order_bg:toOrder}">
                <a href="javascript:;" @click="addtoorder(checkedNames)">去结算({{checkedNames.length}})</a>
            </div>
        </footer>
        
        <footbar></footbar>
        <!-- {{checkedNames}} -->
    </div>
</template>
<script>
import { MessageBox,Toast } from 'mint-ui';
// import {  } from 'mint-ui';
// import { Indicator } from 'mint-ui';
import BScroll from 'better-scroll'
import Topbar from './Topbar.vue'
import Footbar from './Footbar.vue'
import tool from '../assets/js/tool.js'
import { setCookie,getCookie } from '../assets/js/cookie'
import {mapGetters, mapActions ,mapState} from 'vuex'
export default {
    name:'shoppingcart',
    data(){
        return{
            goodlist:[],
            checkedNames:[],
            // isall:false
            apiurl : this.GLOBAL.host + '/vue_api/shoppingcart_list',            
            add_minus_api : this.GLOBAL.host + '/vue_api/add_minus',
            cart_del_api : this.GLOBAL.host + '/vue_api/cartdel',
            Api:this.GLOBAL.host,
        }
    },
    components:{
        Footbar,
        Topbar
    },
    
    methods:{
        // 页面加载获取goodlist数据
        getdata:function(){
            // 判断当前是否有用户登录，如果没有则不做ajax请求
            if(this.getisLogin === true){
                var userid = getCookie('userid')
                this.$http.post(this.apiurl,{
                    userid:userid
                }).then(function(data){
                    // console.log(data.body)
                    this.goodlist = data.body
                    // this.scroll = new BScroll(this.$refs.shop, {click: true,tap: true})
                    console.log(this.goodlist)
                },function(){

                });           
            }             
        },
        // 全选按钮
        checkAll:function(){    //全选按钮 
            if(this.checkedNames.length >=0 && this.isall == false){
                let length = this.goodlist.length;
                let checkAllgood = []
                for(let i = 0;i<length;i++){
                    checkAllgood.push(i)
                }
                this.checkedNames = checkAllgood
                // this.isall = true
            }
            else if(this.isall == true){
                // this.isall = false
                this.checkedNames.splice(0,this.checkedNames.length)                
            }            
        },
        minus:function(cartID,index){
            // console.log(cartID)
            // console.log(index)
            let isaddORminus = -1
            if(this.goodlist[index].good_count >1){
                this.$http.post(this.add_minus_api,{
                    cartID:cartID,
                    isaddORminus:isaddORminus
                }).then(function(data){
                    // console.log(data.body)
                    if(data.body <0){
                        this.goodlist[index].good_count -= 1    
                    }
                })
            }            
        },
        add:function(cartID,index){
            // console.log(cartID)
            // console.log(index)
            let isaddORminus = 1
            
            this.$http.post(this.add_minus_api,{
                cartID:cartID,
                isaddORminus:isaddORminus
            }).then(function(data){
                // console.log(data.body)
                if(data.body >0){
                    this.goodlist[index].good_count += 1    
                }
            })                           
        },
        setcount:function(cartID,index){
            let nowcount = this.goodlist[index].good_count
            let isaddORminus = 0
            // console.log(nowcount)
            this.$http.post(this.add_minus_api,{
                cartID:cartID,
                nowcount:nowcount,
                isaddORminus:isaddORminus
            }).then(function(data){
                // console.log(data)
            })
        },
        // 删除购物车内商品
        good_del:function(cartID,index){
            MessageBox.confirm('是否删除该商品？').then(action => {
                
                console.log(cartID)
                this.$http.post(this.cart_del_api,{
                    cartID:cartID
                }).then(function(data){    
                    // Indicator.open();
                    
                    console.log(this.goodlist)
                    this.$delete(this.goodlist,index)
                    tool.removeByValue(this.checkedNames,index)                
                    

                    let instance = Toast('删除成功');
                    // this.getdata();
                    setTimeout(() => {
                        instance.close();
                        this.$router.replace('/shopping_cart')
                    }, 1000);
                })
            },() => {
                // 取消 回调
                // alert(1)
            });
        },
        addtoorder:function(a){
            // console.log(a)
            if(this.toOrder === true){
                let cartidlist = []
                for (let i = 0; i < a.length; i++) {
                    cartidlist.push(this.goodlist[a[i]]._id);                
                }
                // console.log(cartidlist)
                this.$store.state.toOrderList = cartidlist
                console.log(this.$store.state.toOrderList)
                this.$router.push('/buy_step1')
            }
            
        },
        ...mapActions([
            'changeMsg',
            'changeMsg2'
        ])
    },
    computed:{        
        ...mapState({
            getterMsg:'msg'
        }),
        ...mapGetters([
            'getisLogin'
        ]),
        // getterMsg(){
        //     return this.$store.state.msg
        // },

        isall:function(){       //添加一个计算属性，判断选中列表的length是否和data的length相等，如果相等，这个计算属性的值设置为true，反之设置为false
            if(this.checkedNames.length > 0 && this.checkedNames.length === this.goodlist.length){
                return true
            }
            else{
                return false
            }
        },
        // 计算总金额
        total_price:function(){
            // return 999999
            var totalprice = 0;
            for (let i = 0; i < this.checkedNames.length; i++) {
                let e = this.goodlist[this.checkedNames[i]]
                let a = e.good_count * e.good_price
                totalprice += a   
            }
            return totalprice
        },
        // 计算总运费
        total_freight:function(){
            var totalfreight = 0;
            for (let i = 0; i < this.checkedNames.length; i++) {
                let e = this.goodlist[this.checkedNames[i]]
                let a = e.good_count * e.good_freight
                totalfreight += a  
            }
            return totalfreight
        },
        toOrder:function(){
            if(this.checkedNames.length>0){
                return true
            }else{
                return false
            }
        }
    },
    mounted:function(){
        this.getdata();
        this.$nextTick(() => { this.scroll = new BScroll(this.$refs.shop, {click: true,tap: true}) })
    }
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // -webkit-tap-highlight-color: transparent;
}
ul,ol{
    list-style: none;
}
a{
    text-decoration: none;
}
body{
    // background-color: #ccc;
}
.shoppingcart{

    .check{
        outline:none;
        width: p2r(30);
        height: p2r(30);
        border:1px solid #ccc;
        border-radius: p2r(30);
        -webkit-tap-highlight-color: #fff;
        // -webkit-user-select: none;
        // -moz-user-focus: none;
        // -moz-user-select: none;
        // -webkit-appearance:none;
        -webkit-appearance:none;                                                
    }
    .check:checked{
        // border: 1px solid red;
        border:none;
        background-image: url(/static/images/check.png);
        background-size: p2r(30) p2r(30);
    }
    // background: #ccc;
    // height: 1000px;;
    .topbar{
        width: 100%;
        height: p2r(73);
        background: #fff;
        position: fixed;
        top: 0;
        border-bottom: 1px solid rgb(241, 240, 240);
        z-index: 999;
        a{
            display: block;
            width: p2r(100);
            height: p2r(73);
            line-height:p2r(73) ;       
            padding: 0 p2r(12);    
            text-align: center; 
        }
        .return{            
            position: fixed;
            top: 0;
            left: 0;
        }
        .shopcart_title{
            width: 50%;
            height: p2r(73);
            line-height: p2r(73);
            position: fixed;
            top: 0;
            left: 45%;

        }
        .menu{
            position: fixed;
            top: 0;
            right: 0;
            
        }
    }
    .shop{     
        margin-top: p2r(73);
        height: p2r(800);
        .content{
            width: 100%;
        }
        .shopname{
            width: 100%;
            background: #fff;
            input{
                width: p2r(30);
                height: p2r(30);
            }
        }
        .login_remind{
            width: 100%;
            height: p2r(80);
            line-height: p2r(80);
            background-color: rgb(255, 229, 218);
            p{
                text-align: center;
            }
            a{
                background-color:rgb(255, 81, 0);
                color: #fff;
                padding: 0 p2r(10);
                border-radius: p2r(5);
            }
        }
        .goodlist{
            background: rgb(255, 255, 255);
            border-bottom: 1px solid #f2f2f2;
            .goodmsg{
                width: 100%;
                height: p2r(245);
                .inputcheck{
                    width: p2r(65);
                    height: p2r(245);
                    line-height: p2r(245);
                    padding-left: p2r(17.5);
                    float: left;
                    border-radius: 5px;
                    
                }
                img{
                    width: p2r(190);
                    height: p2r(190);
                    margin-top: p2r(25);
                    float: left;
                }
                .gooddetail{
                    height: p2r(245);
                    width: p2r(370);
                    margin-left: p2r(270);
                    padding-top: p2r(25);  
                    .good_title{
                        width: p2r(300);
                        height: p2r(75);
                        // overflow: hidden;
                        // 文本超出省略
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        // 文本超出省略
                        display: block;
                        padding-right: p2r(20);
                        float: left;
                        a{
                            width:p2r(300);
                            display: block 
                        }
                    }
                    .good_del{
                        width: p2r(35);
                        height: p2r(35);
                        float: left;
                        a{
                            display: block;              
                            width: p2r(35);
                            height: p2r(35);
                            background: url(/static/images/del.png) no-repeat;
                            background-size: p2r(35) p2r(35);
                            img{                  
                                margin:0
                            }
                        }
                    }
                    span{
                        margin-top: p2r(50);
                    }
                    .jine{
                        width: p2r(150);
                        float: left;
                    }
                    .good_price{
                        margin-top: p2r(30);
                        display: block;
                        margin-top: p2r(30);
                        width: p2r(80);
                        height: p2r(45);
                        line-height: p2r(45);
                        color: rgb(255, 81, 0);
                    };
                    .count{
                        width: p2r(175);
                        height: p2r(160);
                        padding-top: p2r(120);
                        margin-left: p2r(150);
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
                    };
                    .good_freight{
                        overflow: hidden;
                        display: block;
                        height: p2r(45);
                        width: p2r(150);
                        line-height: p2r(45);
                    }
                }
            }
        }
    }
    .shopcartfoot{
        width: 100%;
        height: p2r(100);
        background-color: #fff;
        position: fixed;
        bottom: p2r(85);
        border-top: 1px solid #e2e2e2;
        .checkboxAll{
            width: p2r(150);
            height: p2r(100);
            line-height: p2r(100);
            padding-left: p2r(20);
            float: left;            
            
        }
        .total{
            width: p2r(250);
            height: p2r(100);
            float: left;            
            margin-top: p2r(10);
            position: absolute;
            left: p2r(150);
            p{
                display: inline;
                line-height: p2r(40);
                // margin-left: p2r(80);
                position: absolute;
                right: 0;
                span{
                    color: rgb(255, 81, 0);
                }
            }
        }
        .to_order{
            width: p2r(200);
            height: p2r(100);
            float: left;
            position: fixed;
            bottom: p2r(85);
            right: 0;
            background-color:#e2e2e2;                        
            a{
                display: block;
                width: p2r(200);
                height: p2r(100);
                line-height: p2r(100);
                text-align: center;
                color: #fff;
            }
        }
        .to_order_bg{
            background-color: rgb(255, 81, 0);            
        }
    }
}



</style>

