<template>
  <BaseHeader/>
  <div id="content" v-if="courses.length === 0">
    <h1>No courses were found</h1>
  </div>
  <div id="content" v-for="(course,i) in this.courses" :key="i" v-else>
    <Course
        id="course"
        :date="course.date"
        :teacher="course.teacherID"
        :students="course.students"
        :subject="course.subject"
        @click="register(course)"
    />
  </div>
  <router-link to="/classes">
    <BaseButton text="⬅️"/>
  </router-link>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import {mapActions, mapState} from "pinia";
import {useCoopeerStore} from "@/stores/store";
import {getCourses, registerToCourse} from "@/providers/ClassProvider";
import BaseButton from "@/components/BaseButton";
import Course from "@/components/Course";

export default {
  name: "CourseSearch",
  components: {BaseButton, BaseHeader, Course},
  data() {
    return {
      courses: []
    }
  },
  methods: {
    ...mapActions(useCoopeerStore, ["clearStore"]),
    async register(course) {
      const res = await registerToCourse(course, localStorage.getItem("token"));

      if (res.error === "cannot attend your own classes") {
        alert("Vous ne pouvez vous inscrire à votre propre cours")
        return;
      }

      const user = JSON.parse(localStorage.getItem("user"));
      if (!course.students.includes(user.id)) {
        alert("Vous avez bien été inscrit au cours : " + course.subject);
      }
      else {
        alert("Vous êtes déjà inscrit à ce cours");
        return;
      }

      this.$router.push("/classes");
    }
  },
  computed: {
    ...mapState(useCoopeerStore, ["subjects"])
  },
  async mounted() {
    const foundCourses = await getCourses(localStorage.getItem("token"), this.subjects);

    this.courses.push(...foundCourses);
    console.log(this.courses);
    this.clearStore();
  },
}
</script>

<style scoped>
#content {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

#course {
  height: 20%;
  width: 30%;
  border-radius: 16px;
}
</style>