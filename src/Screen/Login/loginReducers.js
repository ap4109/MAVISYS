const initState ={
    isLogin: false,
}
const loginReducer = (state = 'initState', action) => {
    switch(action.type){
       case "SUCCESS_LOGIN":
           return state ={...state, isLogin: true};
           default:
               return state;
    }
}
export default loginReducer