<template>
  <BaseHeader></BaseHeader>
  <div id="main-content">
    <div id="up-content">
      <h1>Vos prochains cours :</h1>
    </div>
    <div id="course-content">
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
    <BaseButton id="btn" text="Ajouter un cours"/>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import Course from "@/components/Course";
import BaseButton from "@/components/BaseButton";
import {getAllCourses} from "@/providers/ClassProvider";

export default {
  name: "Teacher",
  components: {
    BaseButton,
    BaseHeader,
    Course
  },
  data() {
    return {
      courses: []
    }
  },
  async mounted() {
    this.courses = await this.getCourses();
  },
  methods: {
    async getCourses() {
      return await getAllCourses(localStorage.getItem("token"));
    }
  }
}
</script>

<style scoped>
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
  flex-direction: row;
  justify-content: flex-start;
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