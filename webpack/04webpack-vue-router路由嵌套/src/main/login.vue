<template>
  <div>
    <h3>我是登陆组件</h3>
  
    <router-link to="/login/account">account</router-link>
    <router-link to="/login/goodslist">goodslist</router-link>
    <router-view></router-view>
    
    

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  div{
    font-style: italic;
  }

</style>

