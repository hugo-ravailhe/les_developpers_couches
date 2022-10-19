<template>
  <div id="header-container">
    <router-link id="link" to="/"><h1 id="header-title">Coopeer.</h1></router-link>
    <div id="profile" v-if="connected()">
      <h5> Bonjour <span style="color: #272742"><br> {{ this.user.name }} <br> {{this.user.surname}}</span></h5>
      <router-link to="/profile">
        <img id="profile-picture" src="../assets/profile.png" alt="profile">
      </router-link>
      <BaseButton id="btn" text="se déconnecter" @click="disconnection"/>
    </div>
  </div>
</template>

<script>

import {useCoopeerStore} from "@/stores/store";
import {mapActions, mapState} from "pinia";
import BaseButton from "@/components/BaseButton";

export default {
  name: "BaseHeader",
  components: {
    BaseButton
  },

  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    }
  },
  computed: {
    ...mapState(useCoopeerStore, ["loggedIn"])
  },
  methods: {
    ...mapActions(useCoopeerStore, ["disconnect", "decodeToken", "connected"]),
    disconnection() {
      this.disconnect(this.$router)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
#link {
  text-decoration: none;
  color: #272742;
}

#btn {
  margin-left: 10px;
  margin-bottom: 15px;
}

#header-container {
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#header-title {
  font-size: 5vw;
  margin-left: 10px;

  text-decoration: none;
}

#profile-picture:hover {
  cursor: pointer;
}

#header-title:hover {
  cursor: pointer;
}

#profile {
  width: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>