import { createStore } from 'redux'

const defaultState = {
    selectList:{
        kumu:[{'text':'科目二','id':2},{'text':'科目三','id':3}]
    },
    query:{},
    filterData:{}
};
/**
 *  @Test 添加值 
 *  store.dispatch({
        type:"setData",
        key:"appId",
        value:"wxeb2c5385d297112c"
    })
 */

/**
 *  @Test 获全部取值 
 *  store.getState()
 */

/**
 * @Test 监听
 * store.subscribe(() => console.log(store.getState()))
 */
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'setData':
            state[action.key] = action.value;
            return state;
        case 'selectList':
            state.selectList[action.key] = action.value;
            return state;
        case 'filterData':
            state.filterData[action.key] = action.value;
            return state;
        default:
            break;
    }
};

const store = createStore(reducer);
export default store;