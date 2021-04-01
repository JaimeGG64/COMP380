<template>
  <b-container>
    <h1>CSUN Classes</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Username or Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="Username or Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          type="password"
          id="text-password"
          placeholder="Password"
          aria-describedby="password-help-block"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
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
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
