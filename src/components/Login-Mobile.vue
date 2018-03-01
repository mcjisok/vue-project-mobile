<template>
    <div class="login-form">
        <div class="inputcss userid">
            <label for="userid">手机号</label>
            <input type="text" id="userid" placeholder="请输入手机号">
        </div>
        <div class="inputcss password">
            <label for="userpsw">验证码</label>
            <input type="password" id="userpsw" placeholder="请输入手机验证码">
        </div>
    </div>
   
</template>

<script>
export default {
    name:'loginid'
}
</script>

<style lang="scss" scoped>
@function p2r($size){
    @return ($size/32)*1rem
};
.login-form{
    .inputcss{
        width: p2r(590);
        height: p2r(76);
        line-height: p2r(76);
        border-bottom: 1px solid #e2e2e2;
        margin: 0 auto;        
    }
    input{
        border: 1px solid #fff;
        outline:none;
        -webkit-tap-highlight-color: #fff;
        width: p2r(450);
        height: p2r(50);
        padding-left: p2r(30);

    }
}

</style>
