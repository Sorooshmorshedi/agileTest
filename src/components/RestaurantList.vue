<template>
  <div>RestaurantList
    <h1
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      data-testid="restaurant">
      {{restaurant.name}}
    </h1>

  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: "RestaurantList",
  mounted() {
    this.loadRestaurants();
  },
  methods: mapActions({
    loadRestaurants: "restaurants/load"
  }),
  computed: mapState({
    restaurants: state => state.restaurants.records
  })


};
</script>

