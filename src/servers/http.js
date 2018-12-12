import state from '../actions';
let apiserver = 'http://ouhui.tunnel.qydev.com';

let apiData = {
    schoolList:"/wxcx/front/coach/schoolList",
    selectCategory:"/wxcx/front/coach/selectCategory",
    selectClass:"/wxcx/front/coach/selectClass"
}

function formDataCode(data){
    if(!data){
        return;
    }

    let str = '';
    for(let i in data){
        if(data.hasOwnProperty(i)){
            str = str + i +"=" +data[i] + '&';
        }
    }
    return str ? str.substring(0,str.length - 1) : '';
}


export function getApi(type){
    return apiData[type];
}

export function doPost(url, data){
    let appId = state.getState().appId;
    data && (data.appId = appId);
    return fetch(apiserver + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataCode(data)
    }).then(res => {
        return res.json();
    }).catch((err)=>{
        console.log(err)
    })
}

export function doGet(url, data){
    let appId = state.getState().appId;
    !data && (data = {});
    data.appId = appId
    url = url + (data ? '?' +formDataCode(data) : '');
    return fetch(apiserver+url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    }).then(res => {
        return res.json();
    }).catch((err)=>{
        console.log(err)
    })
}