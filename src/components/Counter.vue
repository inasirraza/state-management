<template>
  <div>
      <button @click="increment(4)">increment</button>
      <button @click="decrement">decrement</button>
      <button @click="$store.state.age += 5">Add 5 to age</button>
      <button @click="$store.state.age *= 2">Double Age</button>
      <p>{{printHello()}}</p>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions([
            'increment',
            'decrement'
        ]),        
        printHello(){
            return 'hello'
        }
        // increment(){
        //     this.$store.commit('increment');
        // },
        // decrement(){
        //     this.$store.commit('decrement');
        // }

    }
}
</script>

<style>

</style>