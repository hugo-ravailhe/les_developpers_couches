<template>
  <div id="content">
    <img :src="classImg.image" alt="place-over">
    <div id="content-right">
      <p id="teacher-name">{{ user.surname }} {{ user.name }}</p>
      <p id="date">🕒 {{ parsedDate }}</p>
      <p id="num-students">{{ students.length }} élèves suivent ce cours</p>
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
      classImg: ""
    }
  },
  async mounted() {
    this.user = await getUserFromTeacher(this.teacher);
    const tempDate = new Date(this.date);
    this.parsedDate = `${tempDate.getDay()}/${tempDate.getMonth()+1}/${tempDate.getFullYear()}` +
                      `(${tempDate.getHours()}h${tempDate.getMinutes()})`
    this.classImg = await findClassFromId(localStorage.getItem("token"), this.subject);
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

  border: 1px solid #BBF0E3;
  border-radius: 16px;
}

#content:hover {
  cursor: pointer;
  border: 1px solid #16be9e;
}

#content img {
  height: 50px;
}

#teacher-name {
  color: #5D5FEF;
}
</style>