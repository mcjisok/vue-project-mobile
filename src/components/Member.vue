<template>
    <div class="member">
        <Topbar title="用户中心"></Topbar>
        <div class="member_page">
            <div class="member_box">
                <div class="member_msg">
                    <div class="member_tx"><img src="static/images/tx.png" alt=""></div>
                    <p>[消费者]</p>
                    <p>{{username}}</p>
                </div>
                <div class="menu">
                    <div class="menu_box"><a href="javascript:;"><img src="static/images/pes_icon (1).png" alt=""></a></div>
                    <div class="menu_box"><a href="javascript:;"><img src="static/images/pes_icon (2).png" alt=""></a></div>
                    <div class="menu_box"><a href="javascript:;"><img src="static/images/pes_icon (3).png" alt=""></a></div>

                </div>
            </div>

            <div class="member_list">
                <div class="member_list_box">
                    <div class="member_list_title">
                        <span>我的管理</span>
                    </div>
                    <div class="member_list_menu">
                        <router-link to="/address"><span class="icon"><img src="static/images/pes_icon (4).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;收货地址<span class="go"></span></router-link>
                        <a href="javascipt:;"><span class="icon"><img src="static/images/pes_icon (5).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;退货退款<span class="go"></span></a>
                    </div>
                </div>
                <div class="member_list_box">
                    <div class="member_list_title">
                        <span>我的钱包</span>
                    </div>
                    <div class="member_list_menu">
                        <a href="javascipt:;"><span class="icon"><img src="static/images/pes_icon (6).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;我的代金券<span class="go"></span></a>
                        <a href="javascipt:;"><span class="icon"><img src="static/images/pes_icon (7).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;我的收藏<span class="go"></span></a>
                        <a href="javascipt:;"><span class="icon"><img src="static/images/pes_icon (8).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;我的足迹<span class="go"></span></a>
                        <a href="javascipt:;"><span class="icon"><img src="static/images/pes_icon (9).png" alt=""></span>&nbsp;&nbsp;&nbsp;&nbsp;客服电话<span class="go"></span></a>
                    </div>
                </div>
            </div>
        </div>
        <Footbar></Footbar>
    </div>
</template>

<script>
import Topbar from './Topbar.vue'
import Footbar from './Footbar.vue'
import {mapGetters,mapActions} from 'vuex'
import { getCookie } from '../assets/js/cookie';
export default {
    name:'member',
    data(){
        return{
            username:''
        }
    },
    computed:{
        ...mapGetters(['getisLogin'])
    },
    methods:{
        getUsernameFromState:function(){
            if(this.getisLogin === true){
                this.username = getCookie('name')
            }
        }
    },
    components:{
        Topbar,
        Footbar
    },
    mounted:function(){
        this.getUsernameFromState();
    }
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
.member{
    width: 100%;
    // height: 100%;

    .member_page{
        position: relative;
        top: p2r(73);
        border-bottom: p2r(30) solid #fff;
        margin-bottom: p2r(60);

        .member_box{
            width: 100%;
            height: p2r(355);
            background: #ee9ca7;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to top, #fff8fa, #ffdee3);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to top, #fff8fa, #ffdee3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            .member_msg{
                width: 100%;
                height: p2r(252);
                padding-top: p2r(20);
                img{
                    width: p2r(122);
                    height: p2r(122);
                    display: block;
                }
                p{
                    text-align: center;
                    margin-top: p2r(10);
                    font-size: 14px;
                }
                .member_tx{
                    width: p2r(122);
                    height: p2r(122);
                    margin-left: auto;
                    margin-right: auto;               
                    border-radius: 50%;
                    // overflow: hidden;
                }
                background: #ee9ca7;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to top,#ffeaec, #fff2f4 );  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to top, #ffeaec,#fff2f4 ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            }
            .menu{
                width: 100%;
                height: p2r(95);
                padding-top: p2r(9);
                .menu_box{
                    width: 33.33%;
                    height: p2r(77);
                    float: left;
                    a{
                        margin: 0 auto;
                        display: block;
                        width: p2r(96);
                        height: p2r(77);
                    }
                    img{
                        height: p2r(77);
                    }
                }
            }
        } 
        .member_list{
            border-top:p2r(14) solid #eff4f7;
            width: 100%;
            .member_list_box{
                width: 100%;
                .member_list_title{
                    width: 100%;
                    height: p2r(80);
                    line-height: p2r(80);
                    padding-left: p2r(35);
                    border-bottom: 2px solid #eff4f7;
                    span{
                        font-size: p2r(25);
                        font-weight: 600;
                    }
                }

                .member_list_menu{
                    width: 100%;
                    a{
                        display: block;
                        width: p2r(580);
                        height: p2r(80);
                        line-height: p2r(80);
                        margin: 0 auto;
                        border-bottom: 1px solid #eff4f7;
                    }
                    .icon{
                        width: p2r(49);
                        height: p2r(49);
                        float: left;
                        margin-top: p2r(15);
                        img{
                            width: p2r(49);
                            height: p2r(49);                            
                        }
                    }
                    .go{
                        width: p2r(30);
                        height: p2r(30);
                        float: right;
                        margin-top: p2r(24);    
                        background: url(/static/images/go_icon.png) no-repeat;
                        background-size: p2r(30) p2r(30);                    
                    }
                }
            }
        }       
    }
}
</style>

