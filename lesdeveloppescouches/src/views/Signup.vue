<template>
  <BaseHeader/>
  <div id="main">
    <div id="left-side">
      <p id="text">study with your peers</p>
    </div>
    <form id="form-content">
      <div class="r-container">
        <label for="name">name</label>
        <input id="name" type="text" :class="{errors: !validatedName, valid: validatedName}" v-model="name" @input="nameValidation">
        <div class="hidden" v-if="!validatedName">
          <p class="error">{{nameError}}</p>
        </div>
        <div class="hidden" v-else></div>
      </div>
      <div class="r-container">
        <label for="surname">surname</label>
        <input id="surname" type="text" :class="{errors: !validatedSurname, valid: validatedSurname}" v-model="surname" @input="surnameValidation">
        <div class="hidden" v-if="!validatedSurname">
          <p class="error">{{surnameError}}</p>
        </div>
        <div class="hidden" v-else></div>
      </div>
      <div class="r-container">
        <label for="mail">email</label>
        <input id="mail" type="email" :class="{errors: !validatedEmail, valid: validatedEmail}" v-model="email" @input="emailValidation">
        <div class="hidden" v-if="!validatedEmail">
          <p class="error">{{emailError}}</p>
        </div>
        <div class="hidden" v-else></div>
      </div>
      <div class="r-container">
        <label for="password">password</label>
        <input id="password" type="text" :class="{errors: !validatedPassword, valid: validatedPassword}" v-model="password" @input="passwordValidation">
        <div class="hidden" v-if="!validatedPassword">
          <p class="error">{{passwordError}}</p>
        </div>
        <div class="hidden" v-else></div>
      </div>
      <div class="r-container">
        <label for="repassword">password confirmation</label>
        <input id="repassword" type="text" :class="{errors: !validatedRePassword, valid: validatedRePassword}" v-model="rePassword" @input="rePasswordValidation">
        <div class="hidden" v-if="!validatedRePassword">
          <p class="error">{{rePasswordError}}</p>
        </div>
        <div class="hidden" v-else></div>
      </div>

      <BaseButton id="btn" text="créer un compte" @click="sendForm"/>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import {emailValidation, passwordValidation, rePasswordValidation, validation} from "@/validators/validations";
import {User} from "@/providers/models/User";
import {signUp} from "@/providers/AuthProvider";
import {useCoopeerStore} from "@/stores/store";
import {mapActions} from "pinia";
import BaseHeader from "@/components/BaseHeader";

export default {
  // eslint-disable-next-line
  name: "Signup",
  components: {
    BaseHeader,
    BaseButton
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      rePassword: "",
      validatedEmail: false,
      emailError: "field must not be empty",
      validatedPassword: false,
      passwordError: "field must not be empty",
      validatedRePassword: false,
      rePasswordError: "field must not be empty",
      validatedName: false,
      nameError: "field must not be empty",
      validatedSurname: false,
      surnameError: "field must not be empty"
    }
  },

  methods: {
    nameValidation() {
      const {validate, errorMsg} = validation(this.name)
      this.validatedName = validate
      this.nameError = errorMsg
      console.log(this.nameError)
    },
    surnameValidation() {
      const {validate, errorMsg} = validation(this.surname)
      this.validatedSurname = validate
      this.surnameError = errorMsg
    },
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
    rePasswordValidation() {
      const {validate, errorMsg} = rePasswordValidation(this.password, this.rePassword)
      this.validatedRePassword = validate
      this.rePasswordError = errorMsg
    },
    async sendForm(e) {
      e.preventDefault()

      if (!this.validatedEmail || !this.validatedPassword || !this.validatedName || !this.validatedSurname || !this.validatedRePassword) {
        alert("Vos champs ne sont pas valides")
        return
      }

      const user = new User(
          0,
          this.name,
          this.surname,
          this.email,
          this.password,
          this.rePassword,
          0
      )

      const res = await signUp(user)
      const data = await res.json()

      if (!data.auth) {
        alert("Cet utilisateur n'a pas pu être créé")
        return
      }

      await this.acknowledgeToken(data.token)
      this.$router.push("/classes")
    },
    ...mapActions(useCoopeerStore, ["acknowledgeToken"])
  },
}
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
  justify-content: center;
  align-content: center;

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