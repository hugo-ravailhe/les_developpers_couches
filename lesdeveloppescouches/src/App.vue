<template>
  <div>
    <homePage />
  </div>
</template>

<script>
import homePage from './components/homePage.vue';

export default {
  name: 'App',
  components: {
    homePage
}
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
