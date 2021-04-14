<template>
  <main class="course">
    <h1 class="course__heading">COMP 110 - Intro to Algo</h1>
    <aside class="course__aside">
      <h2>Course Description</h2>
      <p>
        Prerequisites: Grade of C or better in MATH 102 103 104 105 150A or 255A
        or a passing score on the Math Placement Test (MPT) that satisfies
        prerequisites for MATH 150A or 255A . Corequisites: COMP 110L.
        Introduction to algorithms their representation design structuring
        analysis and optimization. Implementation of algorithms as structured
        programs in a high level language. Lab: three hours per week. (Available
        for General Education Lifelong Learning if required by students major.)
      </p>
      <b-form inline>
        <label for="permission-number">Permission Number</label>
        <b-form-input
          id="permission-number"
        ></b-form-input>
      </b-form>
    </aside>
    <article class="course__table">
      <h2>Available Sections</h2>
      <table class="table">
        <thead>
          <tr>
            <td>Days</td>
            <td>Time</td>
            <td>Enroll</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MoWe</td>
            <td>10:30AM-11:30AM</td>
            <td><button>Enroll</button></td>
          </tr>
        </tbody>
      </table>
    </article>
  </main>
</template>

<style lang="scss">
@import "../scss/table.scss";
@import "../scss/variables.scss";
.course {
  display: grid;
  gap: 1rem;
  &__heading {
    text-align: center;
  }
  h2, p {
      text-align: left;
  }
}
@media screen and (min-width: map-get($break-point , "lg")) {
  .course {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "heading heading"
      "table aside";
    &__heading {
      grid-area: heading;
      text-align: left;
    }
    &__aside {
      grid-area: aside;
    }
    &__table {
      grid-area: table;
    }
  }
}
</style>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { FormPlugin,
  BForm,
  BFormText,
  BFormInput } from "bootstrap-vue";
Vue.use(VueAxios, axios, FormPlugin);

export default {
  name: "Course",
  components: {
    "b-form-input": BFormInput,
    "b-form": BForm,
    // eslint-disable-next-line
    "b-form-text": BFormText,
  },
  data: function () {
    return {
      firstName: "Vincent",
      lastName: "Doe",
      availabeSection: undefined,
    };
  },
  mounted: function () {
    Vue.axios
      .get("https://api.metalab.csun.edu/curriculum/api/2.0/classes/comp-110")
      .then((resp) => {
        this.availabeSection = resp.data.classes;
        console.log(resp);
      });
  },
};
</script>