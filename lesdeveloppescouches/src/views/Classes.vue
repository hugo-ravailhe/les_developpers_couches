<template>
  <BaseHeader/>
  <div id="container">
    <div id="main-content">
      <div id="texts">
        <h3>Où as-tu besoin d’aide ? </h3>
        <p>Des centaines d’élèves donnent des cours pour t’aider !
          <span v-if="!isTeacher" @click="$router.push('/becomeateacher')">Tu souhaites devenir l’un d’entre-eux ?</span>
          <span v-if="isTeacher" @click="$router.push('/becomeateacher')">Tu veux donner un cours ?</span>
        </p>
      </div>
      <div id="classes-container">
        <div id="classes" v-for="(clazz, i) in classes" :key="i">
          <Class :class="clazz" :name="clazz.name" :img="clazz.image" @click="addSelectedClass"/>
        </div>
      </div>
      <router-link to="/classes/search">
        <BaseButton
            id="btn"
            text="rechercher"
            :disabled="selectedClasses.length === 0"
            @click="search"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";
import BaseHeader from "@/components/BaseHeader";
import {mapState} from "pinia";
import {useCoopeerStore} from "@/stores/store";
import {getAllClasses} from "@/providers/ClassProvider";
import BaseButton from "@/components/BaseButton";
import {getUsers} from "@/providers/AuthProvider";

export default {
  // eslint-disable-next-line
  name: "Classes",
  components: {
    BaseButton,
    Class,
    BaseHeader
  },
  data() {
    return {
      classes : [],
      selectedClasses : [],
      isTeacher: localStorage.getItem("isTeacher") != null
    }
  },
  async mounted() {
    this.decodeToken(localStorage.getItem("token"));

    const users = await getUsers();
    const user = JSON.parse(localStorage.getItem("user"));
    const foundUser = users.filter(u => u._id === user.id);

    console.log(foundUser[0].teacherID)

    if (foundUser[0].teacherID !== undefined) {
      localStorage.setItem("isTeacher", "true");
      console.log("is t")
    }

    this.classes = await this.getClasses();
  },
  methods: {
    ...mapState(useCoopeerStore, ["decodeToken"]),
    async getClasses() {
      return await getAllClasses(localStorage.getItem('token'));
    },
    addSelectedClass(event) {
      const selected = event.target;
      let clazz = "";

      if (selected.toString().includes("p")) {
        clazz = selected.innerText;
      }

      else if (selected.toString().includes("img")) {
        clazz = selected.alt;
      }

      else {
        clazz = selected.querySelector("p").innerText;
      }

      if (this.selectedClasses.includes(clazz)) {
        const index = this.selectedClasses.indexOf(clazz);
        this.selectedClasses.splice(index, 1);
        return;
      }

      this.selectedClasses.push(clazz);
    },
    search() {
      this.subjects.push(...this.selectedClasses);
    }
  },
  computed: {
    ...mapState(useCoopeerStore, ["subjects"])
  },
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
  align-self: center;
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
  height: 30%;

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