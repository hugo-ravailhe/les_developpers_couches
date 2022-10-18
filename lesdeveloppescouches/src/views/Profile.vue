<template>
  <div id="main-content">
    <img id="profile-picture" src="../assets/profile.png" alt="profile">
    <h2>Username</h2>

    <BaseButton id="btn" text="se deconnecter"/>

    <div id="credentials" class="parameter">
      <a href="@/components/settings.vue"><img class="params" src="../assets/parameter-icon.png" alt="parameter"></a>
    </div>
    <div id="learningxp" class="parameter">
      <h3>L<span>XP</span></h3>
    </div>
    <div id="classes" class="parameter">
      <img class="params" src="../assets/student-hat.png" alt="student hat">
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  // eslint-disable-next-line
  name: "Profile",
  components: {
    BaseButton
  }

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
}

#credentials {
  position: absolute;
  align-self: center;
  left: 25vw;
  top: 68vh;
}

#learningxp {
  position: absolute;
  align-self: center;
  top: 20vh;
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