<template>
  <div class="jd_category">
    <search></search>
    <div>
      <section class="filtrate_term" id="product_sort" dd_name="商品排序" style=""> 
        <ul> 
          <li class="on"><a href="javascript:void(0);" name="list_sort_index">默认</a></li>
          <li class=""><a href="" name="list_sort_sales">销量</a></li>
          <li class=""><a href="" name="list_sort_score">评分</a></li>
          <li class=""><a href="" name="list_sort_price">价格<span class="arrow_up"></span><span class="arrow_down"></span></a></li>
          <li class=""><a href="" name="list_sort_date">最新</a></li>
        </ul> 
      </section> 
        <!-- result --> 
      <section class="goods_list" id="goods_list" name="goods_list" ref="goods_list" dd_name="商品列表" style=""> 
        <!-- <input type="hidden" value="0" id="scrolltop" name="scrolltop" />  -->
        <div class="clearfix" >                 
          <li v-for="(item,index) in msg">
            <div>
                <router-link :to="'/detail/' + item._id"><p class="img"><img :src="Api + item.product_poster[0]" :alt="item.product_title" style="-webkit-transform-origin: 0px 0px; opacity: 1; -webkit-transform: scale(1, 1);" /></p><p class="name">{{item.product_title}}</p></router-link>
                <p class="price"><span class="red">&yen;{{item.product_price}}</span><span name="item_collect" dd_name="收藏" class="span_sc" onclick="m_collect.searchWishlist('a_0_1100604422','1100604422')" id="search_a_0_1100604422" flag="add"></span></p>
            </div>
          </li>               
        </div> 
      </section>
    </div>
  </div>
</template>
<script>
import Search from './Searchbar.vue'
import BScroll from 'better-scroll'
export default {
  name:'goodlist',
  data () {
      return {
          msg :'',
          catebanner:'',
          childmsg:'',
          //apiUrl: 'http://localhost:3000/vue_api/category',
          goodlist_child_api:this.GLOBAL.host + '/vue_api/goodlist_child/',
          Api:this.GLOBAL.host
      }
  },
  components:{Search},
  methods: {
    getdata: function () {        
      var id = this.$route.params.id
      //console.log(id)
      this.$http.get(this.goodlist_child_api+id)
        .then((response) => {
          this.msg = response.body
          // this.catebanner = this.msg[0].banner
          // this.childmsg = this.msg[0].childcates
          //goodlist列表页滚动
          this.scroll = new BScroll(this.$refs.goods_list, {click: true,tap: true})
          
          //console.log('1111')
          //console.log(response.body)
        })
        .catch(function (response) {
        console.log(response)
      })    
    },
    
  },
  mounted: function () {
    this.getdata();    
  }
}
</script>
<style scoped>
.clearfix:after {clear: both;content: " ";display: block;font-size: 0;height: 0;visibility: hidden}
.clearfix {zoom: 1}
li{list-style: none}
.filtrate_term{width: 100%;overflow: hidden;z-index: 5000;top: 45px;position: fixed;background: #fff;}
.filtrate_term ul{width:100%;display: block;background:#fff;}
.filtrate_term li{display: inline-block;width: 20%;height:38px;line-height:38px;text-align: center; float: left;}
.filtrate_term li a{color:#777f86}
.filtrate_term li.on{border-bottom:2px solid #ff465a;}
.filtrate_term li.on a{color: #ff465a;}
.filtrate_term .arrow_up,.filtrate_term .arrow_down{width:0px;height:0px;font-size:0;line-height:0;border-color:#fff #fff #a5a5a5 #fff;border-width:0px 5px 5px;display:inline-block;border-style:solid;position:relative;top:-6px;left:5px;}
.filtrate_term .arrow_down{border-color:#a5a5a5 #fff #fff #fff;border-width:5px 5px 0px;position:relative;top:2px;left:-5px;}
.filtrate_term .active_up{border-color:#fff #fff #fcbb00 #fff;}
.filtrate_term .active_down{border-color:#fcbb00  #fff #fff #fff;}
.box_fixed{position: static;width:100%;}
.sort_fixed{position: static;width:100%;}

.goods_list{padding: 10px 5px 6px; height: 100%;position: absolute; top: 80px; }
/* .goods_list ul{width: 50%;float: left;} */
.goods_list li{width: 50%;overflow: hidden;float: left;position: relative;}
.goods_list li div{border:1px solid #e6e6e6;padding: 3px;background: #fff;margin: 0 5px 10px 5px;}
.goods_list li a{display: block;position: relative;}
.goods_list li a p{display:block;position:relative;}
.goods_list li .img img{display: block;width: 100%;}
.goods_list li .name{height: 36px;line-height: 18px;overflow: hidden;color: #4d525d;}
.goods_list li .price{line-height: 24px;}
.goods_list li .price .red{color: #fe434c;margin-right: 5px;}
.goods_list li .price .zk{background-color: #ee524b;height: 13px;line-height: 13px;padding: 0 3px;color: #fff;font-size: 12px;}
.goods_list li .price .span_sc{float: right;color: #989da2; background-size: 80%;width: 20px;height: 20px;margin-top: 3px;}
.goods_list li .price .span_sc_on{}
.goods_list li .icon_pop{display: block;width: 40px;height: 40px;position: absolute;right: -4px;top: -4px;}
.goods_list li .tuijian{color: #fff;background-color: #fa3232;padding: 0 5px;line-height: 15px;position: absolute;left: -4px;bottom: 36px;font-size: 12px;}
.goods_list li .sjzx{background:#28a0fa 5px center no-repeat;background-size: 6px 11px;padding-left: 14px;}
.goods_list li .szyd{background-color: #1ebeb4;}
.goods_list li .rejian{position:absolute;left: -4px;bottom: 36px;padding: 0 5px;line-height: 15px;font-size: 12px;background-color: #fe435d;color: #fff;}
.error_mm{height: 50px;line-height: 50px;width: 120px;text-align: center;background: rgba(0,0,0,0.7);position: fixed;top: 40%;left:50%;z-index: 5000;color: #fff;margin-left: -60px;}

.load{padding: 10px 0;height: 25px;font-size: 12px;line-height: 25px;text-align: center;color: #646464;}
.load img {width: 16px;height: 16px;margin-right: 5px;vertical-align: text-bottom;}
.more a {padding: 10px 0;display: block;width: 100%;height:25px;line-height:25px;color: #fff;text-align: center;font-size: 12px;background: #3c3c3c;}
.more a img{width: 13px;height: 13px;margin-left: 5px;vertical-align: text-bottom;}
</style>


