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
      <div id="form" class="form-body">
        <form action="POST">
          <label for="sujet">sujet</label>
          <div class="col">
            <div class="col-md-12">
            <select id="subject" name="subject" required>
              <option value="francais">francais</option>
              <option value="mathematiques">mathematiques</option>
              <option value="physique">physique</option>
              <option value="java">java</option>
              <option value="c#">c#</option>
              <option value="javascript">javascript</option>
              <option value="web">web</option>
              <option value="histoire">histoire</option>
          </select>
          </div>
          <div lass="col-md-12">
            <label for="date">date</label>
          </div>
          <div lass="col-md-12">
            <input type="time" name="time">
          </div>
          <button type="submit">Ajouter le cours</button>
          </div>
        </form>
      </div>
    </div>
    <BaseButton id="btn" text="Ajouter un cours"/>
  </div>
</template>

//beautiful form css

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
    },
    async showForm() {
      const btn = document.getElementById('btn');

      btn.addEventListener('click', () => {
      const form = document.getElementById('form');

      if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
       } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
  }
});
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

#form button {
  background: #bbf0e3;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.6px;
  padding: 12px 45px;
  text-transform: uppercase;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

#form button:hover {
  background: #ffffff;
  color: #bbf0e3;
}

#form button:focus {
  outline: none;
}

#form button:active {
  -webkit-transform: scale(0.99);
  transform: scale(0.99);
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