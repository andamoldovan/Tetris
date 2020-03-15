const initState = {
    score: 0,
    level: -1,
};

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'MODIFY_LEVEL': return {...state, level: action.data};
        default: return state;
    }
};

export default rootReducer;