<template>
  <div id="header-container">
    <router-link id="link" to="/"><h1 id="header-title">Coopeer.</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>
#link {
  text-decoration: none;
  color: #272742;
}

#header-container {
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#header-title {
  font-size: 5vw;
  margin-left: 10px;

  text-decoration: none;
}

#header-title:hover {
  cursor: pointer;
}
</style>