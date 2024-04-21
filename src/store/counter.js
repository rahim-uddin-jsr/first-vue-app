import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
state:()=>({
    count5:100,
}),
actions:{
    increment(){
        this.count5+=1
    }
},
getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.count5 * 2
    },
    // the return type **must** be explicitly set
    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1
    },
  },
})