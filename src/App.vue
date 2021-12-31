<template>
<div>
  <app-result></app-result>
  <app-counter></app-counter>
</div>
  
</template>

<script>
import Result from './components/Result.vue'
import Counter from './components/Counter.vue'
export default {
  data(){
    return {
    }
  },
  components:{
    appResult : Result,
    appCounter : Counter
  },
  methods:{

  }

}
</script>

<style>

</style>