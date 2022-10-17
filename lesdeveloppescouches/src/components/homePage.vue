<template>
  <div>
    <base-header></base-header>
    <div id="header-container">
      <div id="header-middle">
        <div id="description-container">
          <p id="description">
            Le seul service d'aide aux devoirs fait par les étudiants pour les étudiants !
          </p>
        </div>
        <img id="heading-img" src="../assets/undraw_online_learning_re_qw08.svg" class="logo" alt="Logo CooPeer">
      </div>
      <div id="button-container">
        <button id="sign-in">Se Connecter</button>
        <button id="sign-up">S'inscrire</button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BaseHeader from "@/components/base-header";

export default defineComponent({
  name: "homePage",
  components: {
    BaseHeader
  }
});

</script>
<style scoped>

#header-container {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}

#header-middle {
  width: 100%;
  height: 60%;

  margin-top: 5%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#heading-img {
  height: 24vw;
}

#description-container {
  width: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#description {
  font-size: 2.3vw;

  padding-left: 20px;
}


#button-container {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 20px;

  width: 210px;
  height: 44px;

  border-radius: 28px;

  border: none;

  background-color: #272742;

  color: white;
}

#sign-in {
  margin-right: 5px;
}

#sign-up {
  margin-left: 5px;
}
</style>