<template>
  <button>{{ this.text }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String
  }
}
</script>

<style scoped>
button {
  margin-top: 20px;

  width: 210px;
  height: 44px;

  border-radius: 28px;

  border: none;

  background-color: #272742;

  color: white;

  text-decoration: none;

  background-image: linear-gradient(160deg, #272742, #1e1e3a);

  box-shadow: 0 0 0 0 #272742, 0.5rem 0.5rem 30px #13092d;
  transition: box-shadow 0.6s;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0 45px 2px #272742, 0.5rem 0.5rem 30px #13092d;
}
</style>