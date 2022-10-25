<template>
    <BaseHeader/>
    <div id="container">
      <div id="main-content">
        <div id="texts">
          <h3>Quels sont tes domaines de prédilection ? </h3>
          <p>Dis nous tout juste en dessous !</p>
        </div>
        <div id="classes-container">
          <div id="classes" v-for="(clazz, i) in this.classes" :key="i" @click="addSelectedClass">
            <Class id="class" :name="clazz.name" :img="clazz.image"/>
          </div>
        </div>
        <BaseButton id="btn" text="S'inscrire en tant que professeur" @click="registerToClasses" :disabled="this.selectedClasses.length === 0"/>
      </div>
    </div>
  </template>
  
  <script>
  import Class from "@/components/Class";
  import BaseHeader from "@/components/BaseHeader";
  import {getAllClasses, registerTeacherToClasses} from "@/providers/ClassProvider";
  import BaseButton from "@/components/BaseButton";
  
  export default {
    // eslint-disable-next-line
    name: "BecomeATeacher",
    components: {
      Class,
      BaseHeader,
      BaseButton
    },
    data() {
      return {
        classes: [],
        selectedClasses: []
      }
    },
    async mounted() {
      this.classes = await this.getClasses();
    },
    methods: {
      async registerToClasses() {
        await registerTeacherToClasses({token:localStorage.getItem("token"), subjects:this.selectedClasses});
        localStorage.setItem("isTeacher", "true");
        window.location.reload();
      },
      async getClasses() {
        return await getAllClasses(localStorage.getItem("token"));
      },
      addSelectedClass(event) {
        const selected = event.target;
        let clazz = "";

        if (selected.tagName === "P") {
          clazz = selected.innerText;
        }

        else if (selected.tagName === "IMG") {
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
      }
    }
  }
  </script>
  
  <style scoped>
  #btn {
    align-self: center;
  }

  h3 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
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
  
    bottom: 70px;
    right: 43.5%;
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
    justify-content: flex-start;
    align-content: flex-start;
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

  #texts {
    margin-top: 7%;
    margin-bottom: 10%;

    height: 10%;
  }
  
  </style>