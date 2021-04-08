<template>
  <div>
    <h1>Hi, {{ firstName + " " + lastName }}</h1>
    <p>Start your class search</p>
    <b-nav-form>
      <b-form-group
        id="input-group-1"
        label="Class Search:"
        label-for="input-1"
      >
        <b-form-input aria-label="Input" class="mr-3"></b-form-input>
        <b-button>Search</b-button>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Class Search:"
        label-for="input-1"
      >
        <b-button>Quick Search by Major</b-button>
        <b-button>Quick Search by GE</b-button>
      </b-form-group>
    </b-nav-form>

    <table class="table">
      <thead>
        <tr>
          <td style="text-align: left">Course Name</td>
          <td>Unit</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in classByMajor" :key="i">
          <td style="text-align: left">
            {{ item.subject }} {{ item.catalog_number }} - {{ item.title }}
          </td>
          <td>{{ item.units }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass">
@import "../scss/table.scss"
</style>

<script>
import { BFormInput, BNavForm, BButton, BFormGroup } from "bootstrap-vue";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Student",
  components: {
    "b-nav-form": BNavForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
    "b-form-group": BFormGroup,
  },
  data: function () {
    return {
      firstName: "John",
      lastName: "Doe",
      classByMajor: undefined,
    };
  },
  mounted: function () {
    Vue.axios
      .get("https://api.metalab.csun.edu/curriculum/api/2.0/classes/art")
      .then((resp) => {
        const seen = new Set();
        this.classByMajor = resp.data.classes.filter((el) => {
          const duplicate = seen.has(el.catalog_number);
          seen.add(el.catalog_number);
          return !duplicate;
        });
        console.log(resp);
      });
  },
  methods: {
    searchByMajor() {
      console.log("hi");
    },
  },
};
</script>


