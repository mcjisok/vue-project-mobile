<template>
    <div class="reg">
        <Topbar></Topbar>
        <div class="register">
            <div class="mobileNum reginput">
                <label for="mbnum">手机号码</label>
                <input type="text" name="mbnum" id="mbnum" v-model="mobileNum" placeholder="请输入11位手机号码">
            </div>
            <div class="mobileV reginput">
                <label for="mbV">手机验证码</label>
                <input type="text" name="mbV" id="mbV" placeholder="请输入手机验证码" v-model="Verificatio_frominput">
                <a href="javascript:;" class="geiV" @click="geiV()">获取验证码</a>
            </div>
            <div class="mobilePsw reginput">
                <label for="mbPsw">设置密码</label>
                <input type="password" name="mbPsw" id="mbPsw" placeholder="6到20位数字+字母或符号组成" v-model="userPSW">
            </div>
            <div class="agreement">
                <input type="checkbox" name="agreement" id="" v-model="isAgreement" >
                <p>同意《XXXXXX注册协议》</p>
            </div>
            <div class="regsiterBtn" v-bind:class="{reg_btn:isAgreement}">
                <a href="javascript:;" @click="gotoregsiter">注册</a>
            </div>
        </div>
    </div>
</template>

<script>
import Topbar from './Topbar.vue'
import { Toast } from 'mint-ui';

export default {
    data(){
        return{
            mobileNum:'',
            mobileVerification:'',
            userPSW:'',
            VerificationApi:this.GLOBAL.host + '/vue_api/verification',
            VerificationNum:'',
            Verificatio_frominput:'',
            isAgreement:false,
            // isAgreement_class:false,
            regsiter_api:this.GLOBAL.host + '/vue_api/mobile_reg'
        }
    },
    components:{
        Topbar
    },
    methods:{
        geiV:function(){
            if(this.mobileNum.length == 11){

                this.$http.post(this.VerificationApi,{
                    username:this.mobileNum
                }).then(function(data){
                    var result = data.body
                    // this.VerificationNum = data.body
                    // console.log(this.VerificationNum)
                    console.log(result)  
                    if(result.results == 1){
                        let instance = Toast('用户已存在！');
                        setTimeout(() => {
                            instance.close();
                        }, 1500);
                    }else if(result.results == 2){
                        this.VerificationNum = data.body.vNum
                        alert(this.VerificationNum)
                        
                    }   
                })
            }else{
                let instance = Toast('请输入正确的手机号');
                setTimeout(() => {
                    instance.close();
                }, 1500);
            }
            
            // console.log(1)
        },
        agreement:function(){
            this.isAgreement = !this.isAgreement
            console.log(this.isAgreement)
        },
        gotoregsiter:function(){
            if(this.isAgreement == true){
                if(this.Verificatio_frominput.length !=6){
                    let instance = Toast('请输入正确的验证码');
                    setTimeout(() => {
                        instance.close();
                    }, 1500);
                }
                else if(this.Verificatio_frominput != this.VerificationNum){
                    let instance = Toast('验证码错误');
                    setTimeout(() => {
                        instance.close();
                    }, 1500);
                }
                else if(this.userPSW.length == 0 || this.userPSW.length > 20){
                    let instance = Toast('请设置正确的密码');
                    setTimeout(() => {
                        instance.close();
                    }, 1500);
                }
                else{
                    // alert('注册成功')
                    this.$http.post(this.regsiter_api,{
                        username:this.mobileNum,
                        password:this.userPSW
                    }).then(function(data){
                        if(data.body.results == 2){
                            let instance = Toast('恭喜您注册成功！即将跳转到登录页面...');
                            setTimeout(() => {
                                instance.close();
                                this.$router.push('/login')
                            }, 1500);
                        }
                        else if(data.body.results == 1){
                            let instance = Toast('用户已存在！');
                            setTimeout(() => {
                                instance.close();
                            }, 1500);
                        }
                    })
                }
            }  
        }
    },
    // computed:{
    //     isAgreement_class:function(){
    //         if(this.isAgreement == true){
    //             return true
    //         }
    //     }
    // }
    
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
.reg{
    height: 100%;
    background-color: #f2f2f2;
}
.register{
    width: 100%;
    height: 100%;
    position: relative;
    top: p2r(73);
    .reginput{
        background-color: #fff;
        width: 100%;
        height: p2r(77);    
        margin-bottom: p2r(24);
        label{
            display: block;
            width: p2r(160);
            height: p2r(77);
            line-height: p2r(77);
            padding-left: p2r(20);
            float: left;            
        }  
        input{
            width: p2r(300);
            height: p2r(77);
            display: block;
        }  
    }
    .mobileV{
        input{
            float: left;
        }
        .geiV{
            display: block;
            width: p2r(177);
            height: p2r(77);
            line-height: p2r(77);
            text-align: center;
            float: left;
            border-left:1px solid #f2f2f2;
        }
    }
    .agreement{
        width: p2r(594);
        height: p2r(27);
        line-height: p2r(27);
        margin:p2r(48) auto 0 auto;
        input{
            width: p2r(27);
            height: p2r(27);
            border:1px solid #ccc;
            background-color: #fff;
            border-radius: p2r(5);
            float: left;
        }
        input:checked{
            border:none;
            background-image: url(/static/images/check_1.png);
            background-size: p2r(27) p2r(27);
        }
        p{
            display: block;
            padding-left: p2r(35);
        }
    }
    .regsiterBtn{
        width: p2r(590);
        height: p2r(70);
        background-color: #ccc;
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
    .reg_btn{
        background-color: #ff6600;            
    }
}
</style>
