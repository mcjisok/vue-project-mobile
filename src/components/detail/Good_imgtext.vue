<template>
    <div class="detai_img">
        <ul>
            <li v-for="(imgurl,index) in imglist" >
                <img :src="urlf + imgurl" width="100%">
            </li>
        </ul>
    </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
    name:'goodimgtext',
    props:['imglist'],
    data(){
        return{
            urlf:this.GLOBAL.host,
        }
    },
    components:{
        Lazyload
    },
    methods:{
        a:function(){
            console.log(this.imglist)
        }
    },
    mounted:function(){
        this.a();
    }
}
</script>

<style lang="scss" scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
