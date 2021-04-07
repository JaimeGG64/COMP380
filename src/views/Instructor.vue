<template>
  <div>
    <h1>Instructor View</h1>
    <table>
      <thead>
        <tr>
          <td>Course ID</td>
          <td>Course Name</td>
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
          <td>
            {{ item.subject }} {{ item.catalog_number }} - {{ item.title }}
          </td>
          <td>
            {{ item.class_type }}
          </td>
          <td>{{ item.meetings[0].location }}</td>
          <td>{{ item.units }}</td>
          <td>{{ item.enrollment_cap - item.enrollment_count }}</td>
          <td><button>Generate</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
      instructorClass: undefined,
    };
  },
  mounted: function () {
    Vue.axios
      .get(
        "https://api.metalab.csun.edu/curriculum/api/2.0/classes?instructor=vahe.karamian@csun.edu"
      )
      .then((resp) => {
        this.instructorClass = resp.data.classes;
        console.log(resp);
      });
  },
};
</script>
