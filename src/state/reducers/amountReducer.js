const reducer = (state=0,action) =>{
    //action is basically tells to withdraw amount or deposit amount
    if(action.type ==='deposit'){
        return state + action.payload
    }
    else if(action.type ==='withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }

};
export default reducer;
//reducer takes action and oldState and returns new state by doing that action