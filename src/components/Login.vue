<template>
    <div class="login">
        <topbar title="登录"></topbar>
        <div class="login-mode">
            <p class="id-psw-login" :class="{IDclass:IDclassActive}" @click="loginforID">账号密码登录</p>
            <p class="mobile-mode-login" :class="{Mobileclass:MobileclassActive}" @click="loginformobile">手机验证登录</p>
        </div>
        <div class="login-content">
            <!-- <component :is="which_to_show" v-on:listentochile="getUserID"></component> -->
            <LoginForID v-on:listentoID="getUserID" v-on:listentoPSW="getUserPsw" v-if="which_to_show == 'LoginForID'"></LoginForID>
            <LoginForMobile v-if="which_to_show == 'LoginForMobile'"></LoginForMobile>
            <div class="login-button">
                <a href="javascript:;" @click="login">登录</a>
            </div>
        </div>
        <div class="forget-psw">
            <a href="javascript:;">忘记密码？</a>
        </div>
        <div class="register">
            <router-link to="/register">快速注册</router-link>
        </div>
    </div>
    
</template>

<script>
import Topbar from './Topbar.vue'
import LoginForID from './Login-ID.vue'
import LoginForMobile from './Login-Mobile.vue'
import { Toast } from 'mint-ui';
import { setCookie,getCookie } from '../assets/js/cookie';
import { mapGetters, mapActions } from 'vuex';


export default {
    data(){
        return {
            which_to_show:'LoginForID',
            IDclassActive:true,
            MobileclassActive:false,

            // 登录数据
            userID:'',
            userPSW:'',
            login_api:this.GLOBAL.host + '/vue_api/login'
        }
    },
    components:{
        Topbar,
        LoginForID,
        LoginForMobile
    },
    methods:{
        ...mapActions([
            'changeIsLogin'
        ]),
        loginforID:function(){
            this.which_to_show = 'LoginForID'
            this.IDclassActive = !this.IDclassActive,
            this.MobileclassActive = !this.MobileclassActive
        },
        loginformobile:function(){
            this.which_to_show = 'LoginForMobile'
            this.IDclassActive = !this.IDclassActive,
            this.MobileclassActive = !this.MobileclassActive
        },
        // 从子组件获取userid
        getUserID:function(data){
            // console.log(data)
            this.userID = data
            // console.log(this.userID)
        },
        // 从子组件获取userpassword
        getUserPsw:function(data){
            this.userPSW = data
            // console.log(this.userPSW)
        },

        // 登录按钮事件
        login:function(){
            let _this = this;
            let userID = this.userID
            let userPSW = this.userPSW
            if(userID.length < 1 ){
                let instance = Toast('请输入登录账号');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }else if(userPSW.length < 1 ){
                let instance = Toast('请输入登录密码');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }else{
                this.$http.post(this.login_api,{
                    username:this.userID,
                    password:this.userPSW
                }).then(function(data){
                    let results = data.body.results
                    let userinfo = data.body.user
                    if(results === 1){
                        let instance = Toast('用户不存在，请重新输入！');
                        setTimeout(() => {
                            instance.close();
                        }, 1500);
                    }else if(results === 3){
                        let instance = Toast('用户密码错误');
                        // userPSW = '' 这里需要清除密码输入框
                        setTimeout(() => {
                            instance.close();                            
                        }, 1500);
                    }else if(results === 2){
                        console.log(data)
                        setCookie('userid',userinfo._id,1000*60)
                        setCookie('name',userinfo.name,1000*60)
                        // setCookie('userid',userinfo._id,1000*60)
                        this.changeIsLogin()
                        let instance = Toast('登录成功');
                        setTimeout(() => {
                            instance.close();  
                            this.$router.push({ path: '/' })          
                        }, 1500);
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
.login{
    width: 100%;
    .login-mode{
        width: 100%;
        height: p2r(85);
        position: relative;
        top: p2r(73);
        border-bottom: 1px solid rgb(241, 240, 240);
        p{
            display: block;
            float: left;
            width: 50%;
            height: p2r(80);
            line-height: p2r(80);
            text-align: center;
            padding:0 p2r(40);
            color: #9b9c9e;
        }
        .a_select{            
            color: #000;
        }
        .IDclass{
            color: #ff6600;
            border-bottom: p2r(5) solid #ff6600;            
        }
        .Mobileclass{
            color: #ff6600;
            border-bottom: p2r(5) solid #ff6600;            
        }
    }
    .login-content{
        width: 100%;
        height: p2r(280);
        margin-top: p2r(170);
        .login-button{
            width: p2r(590);
            height: p2r(70);
            background-color: #ff6600;
            border-radius: p2r(8);
            margin: p2r(50) auto 0 auto;
            a{
                width: p2r(590);
                height: p2r(70);
                line-height: p2r(70);
                display: block;
                text-align: center;
                font-size: 16px;
                color: #fff;
            }

        }
    }
    .forget-psw{
        width: p2r(590);
        height: p2r(50);
        margin: p2r(29) auto 0 auto;
        a{
            display: block;
            float: right;
        }
    }
    .register{
        width: p2r(190);
        height: p2r(55);
        border:p2r(2.5) #ff6600 solid;
        border-radius: p2r(8);
        margin: 0 auto;
        a{
            display: block;
            height: p2r(50);
            line-height: p2r(50);
            text-align: center;
            color: #ff6600;
        }
    }
}
</style>
