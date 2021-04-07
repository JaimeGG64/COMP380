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

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: "Student",
  components: {
    "b-nav-form": BNavForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
  },
  mounted: function (){
    Vue.axios.get('https://api.metalab.csun.edu/curriculum/api/2.0/classes/comp')
    .then((resp) =>{
      console.log(resp);
    })
  },
  data: function () {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
};
</script>
