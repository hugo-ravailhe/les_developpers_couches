<template>
  <BaseHeader/>
  <div id="main-content">
    <img id="profile-picture" src="../assets/profile.png" alt="profile">
    <h2>Username</h2>

    <div id="credentials" class="parameter">
      <router-link to="/profile/settings"><img class="params" src="../assets/parameter-icon.png" alt="parameter"></router-link>
    </div>

    <div id="learningxp" class="parameter" @mouseover="showLxp" @mouseout="showLxp">
      <div id="lxp-container">
        <h3>L<span>XP</span><span id="toggled" v-if="show_lxp"><br>{{this.lxp}}</span></h3>
      </div>
    </div>

    <div id="classes" class="parameter">
      <img class="params" src="../assets/student-hat.png" alt="student hat">
    </div>
  </div>
</template>

<script>

import BaseHeader from "@/components/BaseHeader";

export default {
  // eslint-disable-next-line
  name: "Profile",
  components: {
    BaseHeader
  },
  data() {
    return {
      lxp: 100,
      show_lxp: false,
    }
  },
  methods: {
    showLxp(e) {
      e.preventDefault()
      this.show_lxp = !this.show_lxp
    }
  },
}
</script>

<style scoped>

#main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: calc(100vh - 110px);
}

#btn {
  position: absolute;
  top: 1vh;
  right: 20px;
}

#profile-picture {
  height: 10vh;
  width: 10vh;

  align-self: center;
}

#profile-picture:hover {
  cursor: pointer;
}

#toggled {
  color: #272742;
  font-size: 16px;
}

.parameter {
  height: 15vh;
  width: 15vh;

  border-radius: 50%;
  background-color: #ecf1f4;
  border: 1px solid gray;
  transition: all .2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.parameter:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.params {
  height: 85%;
  width: 85%;

  align-self: center;
  margin-top: 8px;
}

#credentials {
  position: absolute;
  align-self: center;
  left: 25vw;
  top: 68vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#learningxp {
  position: absolute;
  align-self: center;
  top: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

#lxp-container {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

h3 {
  align-self: center;
  font-size: 20px;

  color: #272742;
}

#classes {
  position: absolute;
  align-self: center;
  right: 25vw;
  top: 68vh;
}

h2:hover {
  cursor: default;
}

h3 {
  font-size: 30px;
}

span {
  font-size: 38px;
  color: #f3d9da;
}

@media only screen and (max-width: 412px) {
  #credentials {
    left: 10px;
  }

  #classes {
    right: 10px;
  }
}
</style>