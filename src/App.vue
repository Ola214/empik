<template>
  <div id="app">
    <!-- <router-link to="/about">Kategorie</router-link> -->
    <the-navigation></the-navigation>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
