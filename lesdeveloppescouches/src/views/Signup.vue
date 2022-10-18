<template>
  <div id="main">
    <div id="left-side">
      <p id="text">study with your peers</p>
    </div>
    <form id="right-side">
      <label for="username">username</label>
      <input id="username" type="text">

      <label for="mail">email</label>
      <input id="mail" type="email">

      <label for="password">password</label>
      <input id="password" type="text">

      <label for="repassword">password confirmation</label>
      <input id="repassword" type="text">

      <BaseButton id="btn" text="créer un compte"/>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  // eslint-disable-next-line
  name: "Signup",
  components: {
    BaseButton
  }
}
</script>

<style scoped>
#main {
  width: 100%;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#left-side {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#right-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#text {
  font-size: 7vw;
  min-font-size: 60px;
  font-weight: lighter;

  padding-bottom: 10%;
  text-align: left;
}

#btn {
  align-self: center;
}

label {
  text-align: left;
}

input {
  width: 35vw;
  height: 5vh;

  border-radius: 10px;

  margin-bottom: 10px;
}

#text:hover {
  cursor: default;
}
</style>