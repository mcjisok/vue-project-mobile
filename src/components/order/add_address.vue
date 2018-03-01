<template>
    <div class="add_address">
        <header class="topbar">
            <a href="javascript:history.back();" class="return">返回</a>
            <p class="shopcart_title">{{title}}</p>
            <a class="menu" @click="add_address()">完成</a>
        </header>
        <div class="address_msg">
            <mt-field label="收货人" placeholder="请输入收货人姓名" v-model="person_name"></mt-field>
            <mt-field label="手机号码" type="tel" placeholder="请输入手机号码" v-model="person_mobnum"></mt-field>
            <mt-cell title="省市地区"  is-link value="" v-on:click.native="asss()">
                <span>{{provincename}}&nbsp;&nbsp;{{city}}</span>
            </mt-cell>
            <mt-field label="详细地址" type="textarea" rows="2" placeholder="请输入详细地址（5-120个字）" v-model="person_address_detail"></mt-field>
            <mt-cell title="设置默认地址">
                <mt-switch v-model="isdefaultAddress"></mt-switch>      
            </mt-cell>
                  
            <!-- <mt-popup v-model="popupVisible" position="bottom">
                <div class="diqu">
                    <div class="province">
                        <select v-model="province_index" @change="selectProv(province_index)">
                            <option disabled value="">请选择省份</option>
                            <option v-for="(item,index) in province_list" v-bind:value="index" >{{item.name}}</option>
                        </select>                        
                    </div>
                    <div class="city">
                        <select v-model="city">
                            <option disabled value="">请选择地级市</option>
                            <option v-for="(item,index) in city_list">{{item.name}}</option>                            
                        </select>
                    </div>                    
                </div>
            </mt-popup> -->
            <mt-popup v-model="popupVisible" position="bottom">
                <div class="diqu">
                    <div class="province">
                        <select v-model="province_index" @change="selectProv(province_index)">
                            <option disabled value="">请选择省份</option>
                            <option v-for="(item,index) in ceshiDATA.address" v-bind:value="index" >{{item.name}}</option>
                        </select>                        
                    </div>
                    <div class="city">
                        <select v-model="city">
                            <option disabled value="">请选择地级市</option>
                            <option v-for="(item,index) in citylist.city">{{item.name}}</option>                            
                        </select>
                    </div>                    
                </div>
            </mt-popup>
        </div>
    </div>
</template>

<script>
import { Field,Cell,Popup,Switch,Toast  } from 'mint-ui';

// import { setCookie,getCookie } from '../../assets/js/cookie';
// import province_list from "../../assets/js/diqu.json";
import province_list1 from "../../assets/js/diqu1.json";
import { setCookie,getCookie } from '../../assets/js/cookie'

export default {
    data (){
        return{
            userid:'',
            title:'新增地址',
            popupVisible:false,
            selected:'',
            // province_list:province_list.result[0],
            city_list:'',
            province_index:'',
            city:'',

            // 收货人信息
            person_name:'',
            person_mobnum:'',
            person_address_detail:'',

            // 省市名称
            provincename:'',
            cityname:'',
            isdefaultAddress:false,

            saveapi:this.GLOBAL.host + '/vue_api/saveaddress',
            ceshiDATA:province_list1,
            citylist:'',
        }
    },
    components:{
        Cell,
        Switch
    },
    methods:{
        getUserID:function(){
            this.userid = getCookie('userid')
            console.log(this.ceshiDATA)
        },
        asss:function(){
            this.popupVisible = !this.popupVisible
        },
        selectProv:function(a){
            // this.city = ''
            // this.provincename = this.province_list[a].name 
            // let province_id = this.province_list[a].id 
            // // let cityapi = 'http://apis.map.qq.com/ws/district/v1/getchildren?&id=' + province_id +'&key=K2KBZ-P3RKU-2J5V5-4QYU7-53XUO-5SBY6'
            // let jsonpURL = 'select * from json where url=\"http://apis.map.qq.com/ws/district/v1/getchildren?&id='+province_id+'&key=K2KBZ-P3RKU-2J5V5-4QYU7-53XUO-5SBY6\"'            

            // this.$http.jsonp('http://query.yahooapis.com/v1/public/yql',{params:{ q:jsonpURL,format: "json"}})
            // .then(resp => {
            //     this.city_list = resp.data.query.results.json.result.json                
            // },resp =>{
            //     console.log(resp)
            // })
            // console.log(province_id)
            this.citylist = this.ceshiDATA.address[a]
            this.provincename = this.ceshiDATA.address[a].name
            console.log(this.citylist)

        },
        // 保存收货地址
        add_address:function(){
            if(this.person_name == ''){
                let instance = Toast('请输入收货人姓名');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }
            else if(this.person_mobnum == '' || this.person_mobnum.length !== 11){
                let instance = Toast('请输入正确的手机号码');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }
            else if(this.provincename == ''){
                let instance = Toast('请选择省市地区');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }
            else if(this.person_address_detail == ''){
                let instance = Toast('请输入详细地址');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }
            else{
                this.$http.post(this.saveapi,{
                    userid:this.userid,
                    person_name:this.person_name,
                    person_mobnum:this.person_mobnum,
                    person_address_detail:this.person_address_detail,
                    provincename:this.provincename,
                    cityname:this.city,
                    isdefaultAddress:this.isdefaultAddress
                }).then(function(data){
                    if(data.body.code === 200){
                        let instance = Toast('保存收件地址成功');
                        setTimeout(() => {
                            instance.close();
                            this.$router.go(-1)
                        }, 1500);
                    }
                }).then(function(data){
                    // alert('保存失败')
                })
            }
        }
    },
    mounted:function(){
        this.getUserID()
    }

}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
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
.address_msg{
    margin-top: p2r(73);
}

.diqu{
    width: p2r(640);
    height: p2r(300);
    select{
        outline:none;        
        -webkit-tap-highlight-color: #fff;
         appearance:none;
        -moz-appearance:none;
        -webkit-appearance: none;
        width: p2r(210);
        height: p2r(60);
        background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
        border-radius: p2r(10);
        padding-right: 14px;
        // border: solid 1px #fff;
        float: left;
        margin-left: p2r(40);
        margin-top: p2r(120)

        
    }
    
}
</style>
