<template>
  <div id="app">
    <BaseHeader></BaseHeader>
    <router-view/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BaseHeader from "../src/components/BaseHeader"

export default defineComponent({
  name:"App",
  components: {
    BaseHeader
  }
})
</script>

<style>
:global(*) {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>