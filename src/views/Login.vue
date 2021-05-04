<template>
  <b-container>
    <h1>CSUN Classes</h1>
    <b-form @submit.prevent="verifyLogin">
      <b-form-group
        id="input-group-1"
        label="Username or Email:"
        label-for="input-1"
      >
        <b-form-input
          required
          type="email"
          id="email"
          placeholder="Email"
          v-model="form.email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="password"
          type="password"
          placeholder="Password"
          v-model="form.password"
          aria-describedby="password-help-block"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <div v-if="error">{{ error }}</div>
    </b-form>
  </b-container>
</template>

<script>
// @ is an alias to /src
import {
  BContainer,
  BForm,
  BFormText,
  BFormInput,
  BButton,
  BFormGroup,
} from "bootstrap-vue";
import Firebase from "firebase";
export default {
  name: "home",
  components: {
    "b-form-input": BFormInput,
    "b-button": BButton,
    "b-container": BContainer,
    "b-form": BForm,
    "b-form-group": BFormGroup,
    // eslint-disable-next-line
    "b-form-text": BFormText,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    // eslint-disable-next-line
    verifyLogin: function () {
      const info = {
        email: this.form.email,
        password: this.form.password,
      };
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("student");
          },
          (error) => {
            this.error = error.message;
          }
        );
    },
    onSubmit(event) {
      event.preventDefault();
      if (this.form.email === "jd21345" && this.form.password === "password") {
        this.studentLogin();
      } else if (
        this.form.email === "kv16753" &&
        this.form.password === "bitcoin"
      ) {
        this.instructorLogin();
      } else if (
        this.form.email === "qt72349" &&
        this.form.password === "password"
      ) {
        this.adminLogin();
      }
    },
    studentLogin() {
      // eslint-disable-next-line
      this.$router.push("student");
    },
    instructorLogin() {
      // eslint-disable-next-line
      this.$router.push("instructor");
    },
  },
};
</script>
