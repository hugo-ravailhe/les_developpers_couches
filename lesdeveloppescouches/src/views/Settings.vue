<template>
    <BaseHeader/>
    <div id="main">
        <img id="profile" src="../assets/profile.png" alt="profile">
        <form id="right-side">
        <div class="outer-div">
            <div class="inside-div">
                <label for="username">username</label>
                <input id="username" type="text">
            </div>
            <img src="../assets/editer.png">
        </div>

        <div class="outer-div">
            <div class="inside-div">
                <label for="mail">email</label>
                <input id="mail" type="email">
            </div>
            <img src="../assets/editer.png">
        </div>
      
        <BaseButton id="btn" text="sauvegarder les changements"/>
      </form>
    </div>
  </template>
  
  <script>
  import BaseButton from "@/components/BaseButton";
  import BaseHeader from "@/components/BaseHeader";
  
  export default {
    // eslint-disable-next-line
    name: "Settings",
    components: {
      BaseHeader,
      BaseButton
    }
  }
  </script>
  
  <style scoped>

  img {
    width: 3%;
    margin-left: 20px;
  }

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
    width: 100%;
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

  
  #profile {
    position: fixed;
  
    top: 25%;
    right: 48%;
  
    height: 8%;
    height: 10vh;
    width: 10vh;

    align-self: center;
  }
  
  #profile:hover {
    cursor: pointer;
  }
  .inside-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: center;
  }

  .outer-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  </style>