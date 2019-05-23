<template>
  <div>
    <h1>我是App组件</h1>


    <router-link to="/login">登陆</router-link>
    <router-link to="/register">注册</router-link>
    
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  
}
</script>

/** scoped 定义私有style */
<style scoped>   
  a{
    text-decoration: none;
  }

  .myactive{
    background-color: skyblue;
    font-size: 40px;
    transition: all 0.5s ease;
  }

  .v-enter,
  .v-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }

  .v-enter-active,
  .v-leave-active {
      transition: all 0.5s ease;
    }
</style>

