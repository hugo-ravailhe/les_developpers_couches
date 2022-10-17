<template>
    <div id="header-container">
        <h1 id="header-title">Coopeer</h1>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
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
}

#header-title:hover {
  cursor: pointer;
}
</style>