<template>
  <div>
    <h1>Instructor View</h1>
    <h2>{{ parseEmail(email) }}</h2>
    <table class="table">
      <thead>
        <tr>
          <td>Course ID</td>
          <td style="text-align: left">Course Name</td>
          <td>Course Type</td>
          <td>Location</td>
          <td>Unit</td>
          <td>Seats Left</td>
          <td>Generate Permission Number</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in instructorClass" :key="i">
          <td>
            {{ item.class_number }}
          </td>
          <td style="text-align: left">
            {{ item.subject }} {{ item.catalog_number }} - {{ item.title }}
          </td>
          <td>
            {{ item.class_type }}
          </td>
          <td>{{ item.meetings[0].location }}</td>
          <td>{{ item.units }}</td>
          <td>
            {{ getSeatsLeft(item.enrollment_cap, item.enrollment_count) }}
          </td>
          <td><button>Generate</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@import "../scss/table.scss";
</style>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Instructor",
  data: function () {
    return {
      firstName: "Vincent",
      lastName: "Doe",
      email: "vahe.karamian@csun.edu",
      instructorClass: [],
    };
  },
  mounted: function () {
    Vue.axios
      .get(
        `https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2021/classes?instructor=${this.email}`
      )
      .then((resp) => {
        this.instructorClass = resp.data.classes;
        console.log(resp);
      });
  },
  methods: {
    parseEmail(instructorEmail) {
      let instructorName = instructorEmail.split(".");
      //first name is instructorName[0]
      let instructorLastName = instructorName[1].split("@");
      //last name is instructorLastName[0]
      instructorName[1] = instructorLastName[0];
      //first name at instructorName[0] and last name at instructorName[1]
      instructorName[0] =
        instructorName[0].charAt(0).toUpperCase() + instructorName[0].slice(1);
      instructorName[1] =
        instructorName[1].charAt(0).toUpperCase() + instructorName[1].slice(1);
      /*
      let instructorName = parseEmail("vahe.karamian@csun.edu");
      console.log(instructorName[0] + " " + instructorName[1]);
      */

      return instructorName[0] + " " + instructorName[1];
    },
    getSeatsLeft(enrollmentCap, enrollmentCount) {
      return enrollmentCap - enrollmentCount < 0
        ? 0
        : enrollmentCap - enrollmentCount;
    },
  },
};
</script>
