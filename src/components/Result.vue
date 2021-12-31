<template>
  <div>
      <h1>Result</h1>
      <p>Counter : {{$store.state.counter}}</p>
      <p>Age : {{ageFive}}</p>
      <p>Doubled Age : {{doubleAged}}</p>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
export default {

    computed: mapGetters([
        'ageFive',
        'doubleAged'
    ])
}
</script>

<style>

</style>