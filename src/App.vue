<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="soroosh" />
    <RestaurantScreen />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import RestaurantScreen from '@/components/RestaurantScreen';

export default {
  name: 'App',
  components: {
    HelloWorld,
    RestaurantScreen
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
