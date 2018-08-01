<template>
  <div id="app">
    <button @click="goHome">首页</button>
    <button @click="goNext">前进</button>
    <button @click="goBack">后退</button></br>
    <router-link to="/Index">hp</router-link>
    <router-link to="/List">list</router-link>
    <router-link to="/home/subList2/zs/20">重定向到主页</router-link>
    <router-link to="/home">alias</router-link>
    
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/Index');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1s;
}

.fade-enter-to{
  opacity: 1;
}

.fade-leave{
  opacity: 1;
}

.fade-leave-active{
  transition: opacity 1s;
}

.fade-leave-to{
  opacity: 0;
}
</style>
