<template>
  <div id="content" :class="{registered:isRegistered, content:!isRegistered}">
    <img :src="classImg.image" alt="place-over">
    <div id="content-right">
      <p id="teacher-name">{{ user.surname }} {{ user.name }}</p>
      <p id="date">🕒 {{ parsedDate }}</p>
      <p id="num-students" v-if="!isRegistered">{{ students.length }} élèves suivent ce cours</p>
      <p id="num-students" v-if="isRegistered">Vous suivez ce cours</p>
    </div>
  </div>
</template>

<script>
import {getUserFromTeacher} from "@/providers/AuthProvider";
import {findClassFromId} from "@/providers/ClassProvider";

export default {
  name: "Course",
  props: {
    date: Date,
    teacher: String,
    students: [String],
    subject: String
  },
  data() {
    return {
      user: {},
      parsedDate: null,
      classImg: "",
      isRegistered: false,
    }
  },
  async mounted() {
    this.user = await getUserFromTeacher(this.teacher);
    const tempDate = new Date(this.date);
    this.parsedDate = `${tempDate.getDay()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}` +
                      `(${tempDate.getHours()}h${tempDate.getMinutes()})`
    this.classImg = await findClassFromId(localStorage.getItem("token"), this.subject);
    const user = JSON.parse(localStorage.getItem("user"));
    this.isRegistered = this.students.includes(user.id) && this.teacher !== this.user.id;
  }
}
</script>

<style scoped>
#content {

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 16px;
}

.content {
  border: 1px solid #BBF0E3;
}

.content:hover {
  cursor: pointer;
  border: 1px solid #16be9e;
}

#content img {
  height: 50px;
}

#teacher-name {
  color: #5D5FEF;
}

.registered {
  border: 1px solid #16be9e;
  cursor: not-allowed;
}

.registered:hover {
  border: 1px solid #16be9e;
  cursor: not-allowed;
}
</style>