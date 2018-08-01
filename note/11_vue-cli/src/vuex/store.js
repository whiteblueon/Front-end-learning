import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);//先引用vue才能引用vuex

const state = {//state用来存值 变量名必须是state
    count:1,
    num:20
}

const mutations ={//就是定义方法
    add(state,sum){
        state.count+=sum;
    }
}
const getters ={
    count1(state){//定义了一个count1属性传入state 
        return state.count + state.num
    }
}
const actions = {//异步的 即在执行commit之前可以执行别的 不是立即执行commit
    addAction({commit},x){
        commit('add',x);//commit是调用mutations里的add且传参x
    }
    //最后其实还是执行mutations
}

export default new Vuex.Store({//export default导出模块
    state,
    mutations,
    actions,
    getters

});