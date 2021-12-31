import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter: 0,
        age : 12
    },
    getters:{
        ageFive: state =>{
            return state.age + 5;
        },
        doubleAged: state =>{
           return state.age * 2;
        }
    },
    mutations:{
        increment: (state, num)=>{
            state.counter+=num
        },
        decrement: state=>{
            state.counter--
        }
    },
    actions:{
        increment: ({commit},num)=>{
            commit('increment', num)
        },
        decrement: ({commit})=>{
            commit('decrement')
        }
    }
})