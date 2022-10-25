<template>
  <BaseHeader></BaseHeader>
  <div id="main-content">
    <div id="up-content">
      <h1>Vos prochains cours :</h1>
    </div>
    <div id="course-content" v-if="!showForm">
      <div id="course" v-for="(course, i) in courses" :key="i">
        <div v-if="course.teacherID"></div>
        <Course
            :date="course.date"
            :teacher="course.teacherID"
            :students="course.students"
            :subject="course.subject"
        />
      </div>
    </div>
    <div id="form" class="form-body" v-else>
      <form action="POST">
        <label for="sujet">sujet</label>
        <div class="col">
          <div class="col-md-12">
            <select id="subject" name="subject" required v-model="subject">
              <option value="francais">francais</option>
              <option value="maths">mathematiques</option>
              <option value="physique">physique</option>
              <option value="java">java</option>
              <option value="c#">c#</option>
              <option value="javascript">javascript</option>
              <option value="web">web</option>
              <option value="histoire">histoire</option>
            </select>
          </div>
          <div class="col-md-12">
            <label for="date">date</label>
          </div>
          <div class="col-md-12">
            <input type="date" name="time" v-model="date">
          </div>
          <div class="col-md-12">
            <label for="time">heure</label>
          </div>
          <div class="col-md-12">
            <input type="time" name="time" v-model="time">
          </div>
          <BaseButton text="Ajouter le cours" @click="addCourse"/>
        </div>
      </form>
    </div>
    <BaseButton id="btn" text="Ajouter un cours" @click="showForm = !showForm" v-if="!showForm"/>
    <BaseButton id="btn" text="Ne pas créer de cours" @click="showForm = !showForm" v-if="showForm"/>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import Course from "@/components/Course";
import BaseButton from "@/components/BaseButton";
import {addCourse, getCoursesBy} from "@/providers/ClassProvider";

export default {
  name: "Teacher",
  components: {
    BaseButton,
    BaseHeader,
    Course
  },
  data() {
    return {
      courses: [],
      showForm: false,
      date: new Date(),
      time: new Date(),
      subject: ""
    }
  },
  async mounted() {
    this.courses = await this.getCourses();
  },
  methods: {
    async getCourses() {
      const user = JSON.parse(localStorage.getItem("user"));
      let courses = await getCoursesBy(localStorage.getItem("token"), user.id);
      console.log(courses);
      return courses;
    },
    async addCourse(e) {
      e.preventDefault();
      this.showForm = !this.showForm;
      const date = new Date(this.date + " " + this.time);
      await addCourse(new Object({"subject":this.subject, "date":date}), localStorage.getItem("token"));

      window.location.reload();
    }
  }
}
</script>

<style scoped>
#form {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 40px;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

#form label {
  color: #b2b2b2;
  display: block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

#form input {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  display: block;
  font-size: 16px;
  padding: 12px 15px;
  margin: 0 0 20px;
  width: 88%;
}

#form select {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  display: block;
  font-size: 16px;
  padding: 12px 15px;
  margin: 0 0 20px;
  width: 100%;
}

#form input:focus {
  outline: none;
  border-color: #bbf0e3;
}


#main-content {
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-evenly;
}

#course-content {
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  overflow-y: scroll;
}

#course {
  width: 33%;
}

#btn {
  align-self: center;
}


</style>