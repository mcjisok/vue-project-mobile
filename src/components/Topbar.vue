<template>
    <header class="topbar">
        <a href="javascript:history.back();" class="return">返回</a>
        <p class="shopcart_title">{{title}}</p>
        <a href="javascript:;" class="menu">菜单</a>
    </header>
</template>

<script>
export default {
    name : 'topbar',
    props: ['title'],
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
</style>
