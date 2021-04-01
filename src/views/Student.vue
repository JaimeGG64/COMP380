<template>
  <div>
    <h1>Hi, {{ firstName + " " + lastName }}</h1>
    <p>Start your class search</p>
    <b-nav-form>
      <b-form-input aria-label="Input" class="mr-1"></b-form-input>
      <b-button>Search</b-button>
      <b-button>Quick Search by Major</b-button>
      <b-button>Quick Search by GE</b-button>
    </b-nav-form>
  </div>
</template>

<script>
import { BFormInput, BNavForm, BButton } from "bootstrap-vue";

export default {
  name: "Student",
  components: {
    "b-nav-form": BNavForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
  },
  data: function () {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
};
</script>
