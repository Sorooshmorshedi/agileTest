<template>
<<<<<<< HEAD
  <v-app>
    <v-app-bar color="primary" fixed app>
      <v-toolbar-title>Opinion Ate</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <RestaurantScreen />
      </v-container>
    </v-content>
  </v-app>


</template>

<script>
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="soroosh" />
    <RestaurantScreen />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import RestaurantScreen from '@/components/RestaurantScreen';

>>>>>>> list-restaurants
export default {
  name: "App",
  components: {
<<<<<<< HEAD

  }
=======
    HelloWorld,
    RestaurantScreen
  },
>>>>>>> list-restaurants
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
