<template>
  <BaseHeader/>
  <div id="main">
    <div id="left-side">
      <p id="text">study with your peers</p>
    </div>
    <form id="form-content">
      <div class="r-container">
        <label for="username">email</label>
        <input id="username" :class="{errors:!validatedEmail, valid:validatedEmail}" @input="emailValidation" type="email" v-model="email">
        <div class="hidden" v-if="!validatedEmail">
          <p class="error">{{emailError}}</p>
        </div>
        <div class="hidden" style="display: none" v-else></div>
      </div>


      <div class="r-container">
        <label for="password">password</label>
        <input id="password" :class="{errors:!validatedPassword, valid:validatedPassword}" type="password" v-model="password" @input="passwordValidation">
        <div class="hidden" v-if="!validatedPassword">
          <p class="error">{{passwordError}}</p>
        </div>
        <div class="hidden" v-else>
        </div>
      </div>

      <BaseButton id="btn" text="se connecter" @click="sendForm"/>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import {emailValidation, passwordValidation} from "@/validators/validations";
import {defineComponent} from "vue";
import {logIn} from "@/providers/AuthProvider";
import {Credentials} from "@/providers/models/User";
import {useCoopeerStore} from "@/stores/store";
import {mapActions} from "pinia";
import BaseHeader from "@/components/BaseHeader";

export default defineComponent({
  name: "Login",
  components: {
    BaseButton,
    BaseHeader
  },
  data() {
    return {
      email: "",
      password: "",
      validatedEmail: false,
      validatedPassword: false,
      emailError: "field must not be empty",
      passwordError: "field must not be empty"
    }
  },
  computed: {
  },
  methods: {
    emailValidation() {
      const {validate, errorMsg} = emailValidation(this.email)
      this.validatedEmail = validate
      this.emailError = errorMsg
    },
    passwordValidation() {
      const {validate, errorMsg} = passwordValidation(this.password)
      this.validatedPassword = validate
      this.passwordError = errorMsg
    },
    async sendForm(e) {
      e.preventDefault()

      if (!this.validatedEmail || !this.validatedPassword) alert("Vos champs ne sont pas valides")

      const res = await logIn(new Credentials(this.email, this.password))
      const data = await res.json()

      if (data.token === undefined || data.token === null)
        alert("Cet utilisateur n'existe pas")

      await this.acknowledgeToken(data.token)

      this.$router.push("/profile")
    },
    ...mapActions(useCoopeerStore, ["acknowledgeToken"])
  }
})
</script>

<style scoped>
#main {
  width: 100%;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#left-side {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#form-content {
  width: 35vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  align-content: flex-start;
}

.r-container {
  text-align: left;
}

#text {
  font-size: 7vw;
  min-font-size: 60px;
  font-weight: lighter;

  padding-bottom: 10%;
  text-align: left;
}

#btn {
  align-self: center;
}

label {
  text-align: left;
}

input {
  width: 35vw;
  height: 5vh;

  border-radius: 10px;

  margin-bottom: 10px;

  align-self: flex-start;
}

.errors {
  border: 1px solid red;
}

.valid {
  border: 1px solid green;
}

.hidden {
  width: 35vw;
  display: inline-block;
}

.error {
  position: relative;

  top: -2vh;

  color: red;
  text-align: left;
  font-size: 12px;
}

#text:hover {
  cursor: default;
}

</style>