<template>
  <div id="container">
    <BaseButton id="btn" text="tu souhaites devenir prof ?"/>
    <img id="profile" src="../assets/profile.png" alt="profile picture">

    <div id="main-content">
      <div id="texts">
        <h3>Où as-tu besoin d’aide ? </h3>
        <p>Des centaines d’élèves donnent des cours pour t’aider ! <span>Tu souhaites devenir l’un d’entre-eux ?</span></p>
      </div>
      <div id="classes-container">
        <div id="classes" v-for="i in 9" :key="i">
          <Class id="class" name="Français" img="fricon.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import Class from "@/components/Class";

export default {
  // eslint-disable-next-line
  name: "Classes",
  components: {
    BaseButton,
    Class
  }

}
</script>

<style scoped>
h3 {
  font-size: 30px;
}

span {
  text-decoration: underline;
  color: #5D5FEF;
}

span:hover {
  cursor: pointer;
}

#btn {
  position: fixed;

  top: 15px;
  right: 30%;
}


#profile {
  position: fixed;

  top: 25px;
  right: 10px;

  height: 8%;
}

#profile:hover {
  cursor: pointer;
}

#container {
  width: 100%;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#main-content {
  width: 100%;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}

#classes-container {
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  align-self: center;
}

#classes {
  width: 18vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  flex: 0 0 33.33%;
}

</style>