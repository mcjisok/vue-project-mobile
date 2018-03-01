import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Good_list from './components/Good_list.vue'
import Good_detail from './components/Good_detail.vue'
import ShoppingCart from "./components/ShoppingCart";
import Login from './components/Login'
import Register from './components/Register'
import Member from './components/Member'

import detail from './components/Good_detail_bak'

import buy_step1 from "./components/order/buy_step1";
import add_address from "./components/order/add_address";

// 收货地址页面
import address from "./components/personal_center/address";


const routers = [
    {   
        name:'home',
        path:'/',
        component:Home,
    },
    {
        name:'category',
        path: '/category',        
        component: Category
    },
    {
        path: '/good_list/:id',
        component:  Good_list,        
    },
    { 
        path: '/good_detail/:id', 
        component: Good_detail 
    },
    {
        path: '/shopping_cart',
        component: ShoppingCart
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path:'/member',
        component: Member
    },
    {
        path:'/detail/:id',
        component:detail
    },
    {
        path:'/buy_step1',
        component: buy_step1
    },
    {
        path:'/add_address',
        component:add_address
    },
    {
        path:'/address',
        component: address
    },
];

  export default routers
