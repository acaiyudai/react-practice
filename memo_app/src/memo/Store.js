import { createStore } from 'redux';

// state
const initData = {
    data:[{                          // メモのデータ
        message:'sample data',          // メモの文章
        created:new Date()              // メモが作成された時刻
    }],
    message:'please type message.',  // 表示するメッセージ
    mode:'default',                  // 操作内容を示す文字
    fdata:[]                         // 検索したメモをまとめておくもの
};

// reducer
export function memoReducer(state = initData, action){
    switch(action.type){
        case 'ADD':
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'FIND':
            return findReduce(state, action);
        default:
            return state;
    }
}

// reduce action

// メモ追加のreduce処理
function addReduce(state, action){
    let data = {
        message:action.message,
        created:new Date()
    };
    let newdata = state.data.slice();
    newdata.unshift(data);             // 要素を配列内の最初に追加する
    return {
        data:newdata,
        message:'Added!',
        mode:'default',
        fdata:[]
    };
}

// メモ検索のreduce処理
function findReduce(state, action){
    let f = action.find;
    let fdata = [];
    state.data.forEach((value) => {
        if (value.message.indexOf(f) >= 0){
            fdata.push(value);
        }
    });
    return {
        data: state.data,
        message:'find "' + f + '":',
        mode:'find',
        fdata: fdata
    };
}

// メモ削除のreduce処理
function deleteReduce(state, action){
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);
    return {
        data:newdata,
        message:'delete "' + action.index + '":',
        mode:'delete',
        fdata:[]
    };
}

// action creator(actionを定義・生成するための関数)

// メモ追加のaction
export function addMemo(text){
    return {
        type:'ADD',
        message:text
    };
}

// メモ削除のaction
export function deleteMemo(num){
    return {
        type:'DELETE',
        index:num
    };
}

// メモ検索のaction
export function findMemo(text){
    return {
        type:'FIND',
        find:text
    };
}

// storeを作成
export default createStore(memoReducer);
