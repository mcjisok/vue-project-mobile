
export const mutationsMsg = (state, payload) => {
    state.msg = payload.msg;
  }

export const mutMsg = (state,payload) =>{
    state.msg = payload.msg
}

export const isLogin = (state,payload) => {
    state.isLogin = !state.isLogin
}