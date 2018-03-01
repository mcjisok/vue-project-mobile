<template>
    <div class="footbar">
        <ul>
            <li><router-link to="/"><img src="static/images/home.png" alt=""></router-link></li>
            <li><router-link to="/category"><img src="static/images/category.png" alt=""></router-link></li>
            <li><router-link to="/member"><img src="static/images/center.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="static/images/search.png" alt=""></router-link></li>
            <li><router-link to="/shopping_cart"><img src="static/images/shoppingcart.png" alt=""></router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'footbar',
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

.footbar{
    height: p2r(85);
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    ul{
        height: p2r(85);
        width: 100%;
        li{
            float: left;
            width: p2r(128);
            height: p2r(85);
            a{
                display: block;
                img{
                    height: p2r(85);
                }
            }
        }
    }
}
</style>

