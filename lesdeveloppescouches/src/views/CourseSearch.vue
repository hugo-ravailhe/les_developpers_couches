<template>
  <BaseHeader/>
  <div v-if="courses.length === 0">
    <h1>No courses were found</h1>
  </div>
  <div v-for="(course,i) in this.courses" :key="i" v-else>
    <Course
        :date="course.date"
        :teacher="course.teacherID"
        :students="course.students"
        :subject="course.subject"
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
import {getCourses} from "@/providers/ClassProvider";
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
    ...mapActions(useCoopeerStore, ["clearStore"])
  },
  computed: {
    ...mapState(useCoopeerStore, ["subjects"])
  },
  async mounted() {
    const foundCourses = await getCourses(localStorage.getItem("token"), this.subjects);
    this.courses.push(...foundCourses);
    console.log(this.courses);
    this.clearStore();
  }
}
</script>

<style scoped>

</style>