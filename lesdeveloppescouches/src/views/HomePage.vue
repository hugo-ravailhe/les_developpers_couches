<template>
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
        <router-link to="/login"><BaseButton id="btn1" text="se connecter"/></router-link>
        <router-link to="/signup"><BaseButton id="btn2" text="créer un compte"/></router-link>
      </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import BaseButton from "@/components/BaseButton";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseButton
  }
});

</script>
<style scoped>

#header-container {
  width: 100%;
  height: calc(100vh - 90px);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
}

#btn1 {
  margin-right: 5px;
}

#btn2 {
  margin-left: 5px;
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
  text-align: left;
}


#button-container {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#sign-in {
  margin-right: 5px;
}

#sign-up {
  margin-left: 5px;
}

</style>