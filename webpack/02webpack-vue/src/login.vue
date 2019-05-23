<template>
  <div>
    <p>{{ title }}</p>
  <input type="button" value="点我" @click="out">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: '4564652'
      }
    },
    methods: {
      out () {
        console.log('被调用了')
      } 
    }
  }

</script>


<style>
  
</style>


