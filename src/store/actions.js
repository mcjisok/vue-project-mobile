export const changeMsg = ({commit}) => {
    commit({
        type:'mutationsMsg',
        msg:'新修改之后的数据！！payload'
    })
}

export const changeMsg2 = ({commit}) =>{
    commit({
        type:'mutMsg',
        msg:'测试修改！！！'
    })
}

export const changeIsLogin = ({commit}) =>{
    commit({
        type:'isLogin'
    })
}