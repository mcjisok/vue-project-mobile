<template>
    <div class="address">
        <Topbar title="收货地址"></Topbar>        
        <div class="address_list">
            <div class="noaddress">
                <p>暂无收货地址</p>
            </div>
            <div class="address_box" v-for="(items,index) in address_list">
                <div class="address_name_num">
                    <p>收件人：{{items.person_name}}<span>{{items.person_mobnum}}</span></p>
                </div>
                <div class="address_detail">
                    <p><span v-if="items.isdefaultAddress">[默认地址]&nbsp</span>{{items.provincename}}{{items.cityname}}{{items.person_address_detail}}</p>
                </div>
            </div>
        </div>
        <div class="addNewAddress">
            <router-link to="/add_address">新增收货地址</router-link>
        </div>
    </div>
</template>

<script>
import Topbar from '../Topbar.vue'
import { setCookie,getCookie } from '../../assets/js/cookie'

export default {
    data(){
        return{
            getaddresslist_api:this.GLOBAL.host + '/vue_api/address_list',
            address_list:''
        }
    },
    components:{
        Topbar
    },
    methods:{
        getaddresslist:function(){
            var userid = getCookie('userid')
            // alert(userid)
            this.$http.post(this.getaddresslist_api,{
                userid:userid
            }).then(function(data){
                console.log(data)
                if(data.body.code === 404){

                }
                else{
                    this.address_list = data.body
                }
            })
        }
    },
    computed:{

    },
    mounted:function(){
        this.getaddresslist()
    }
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};


.address_list{
    width: 100%;   
    .noaddress{
        position: absolute;
        top: 50%;
        left: 40%;
        p{
            color: #ccc;
        }
    } 
    .address_box{
        width: 100%;
        height: p2r(185);
        // background: #ccc;
        position: relative;
        top: p2r(73);
        padding: 0 p2r(20);
        border-bottom: #f1f1f1 solid 1px;
        .address_name_num{
            width: 100%;
            height: p2r(92.5);
            line-height: p2r(92.5);            
            span{
                float: right;
            }
        }
        .address_detail{
            width:100%;
            height: p2r(92.5);
            line-height: p2r(42.5);
            span{
                color: #ff4965;
            }
            p{
                color: #ccc;
            }
        }
    }
}
.addNewAddress{
    width: 100%;
    height: p2r(90);
    background: #ff4965;
    position: fixed;
    bottom: 0;
    a{
        display: block;
        height: p2r(90);
        line-height: p2r(90);
        text-align: center;
        margin: 0 auto;
        color: #fff;
        font-size: 0.8rem;
    }
}

</style>
