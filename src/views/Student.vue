<template>
  <div>
    <h1 v-if="user.displayName">Hi, {{ user.displayName }}</h1>
    <p>Start your class search</p>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Class Search:"
        label-for="input-1"
      >
        <b-form-input aria-label="Input" class="mr-3"></b-form-input>
        <b-button>Search</b-button>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-button @click="searchByMajor()">Quick Search by Major</b-button>
        <b-button>Quick Search by GE</b-button>
      </b-form-group>
    </b-form>

    <table class="table" v-if="quickSearchMajorState">
      <thead>
        <tr>
          <td style="text-align: left">Course Name</td>
          <td>Units</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in classByMajor" :key="i">
          <td style="text-align: left">
            <router-link :to="`/course/${item.subject}-${item.catalog_number}`">
              {{ item.subject }} {{ item.catalog_number }} - {{ item.title }}
            </router-link>
          </td>
          <td>{{ item.units }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@import "../scss/table.scss";
</style>

<script>
import {
  BFormInput,
  BForm,
  BButton,
  BFormGroup,
  FormPlugin,
} from "bootstrap-vue";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios, FormPlugin);

export default {
  name: "Student",
  components: {
    "b-form": BForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
    "b-form-group": BFormGroup,
  },
  props: ["user"],
  data: function () {
    return {
      firstName: "John",
      lastName: "Doe",
      classByMajor: undefined,
      quickSearchMajorState: false,
    };
  },
  mounted: function () {
    let subject = "comp";
    Vue.axios
      .get(`https://api.metalab.csun.edu/curriculum/api/2.0/classes/${subject}`)
      .then((resp) => {
        const seen = new Set();
        this.classByMajor = resp.data.classes.filter((el) => {
          const duplicate = seen.has(el.catalog_number);
          seen.add(el.catalog_number);
          return !duplicate;
        });
      });
  },
  methods: {
    searchByMajor() {
      this.quickSearchMajorState = true;
    },
  },
};
</script>


