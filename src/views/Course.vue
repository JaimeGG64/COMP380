<template>
  <main class="course">
    <router-link class="course__back-link" to="/student">
      Back to Results
    </router-link>
    <h1 class="course__heading">
      {{
        `${availabeSection[0].subject} ${availabeSection[0].catalog_number} - ${availabeSection[0].title}`
      }}
    </h1>

    <aside class="course__aside">
      <h2>Course Description</h2>
      <p>
        {{ availabeSection[0].description }}
      </p>
      <b-form inline>
        <label for="permission-number">Permission Number</label>
        <b-form-input id="permission-number"></b-form-input>
      </b-form>
    </aside>
    <article class="course__table">
      <h2>Available Sections</h2>
      <table class="table">
        <thead>
          <tr>
            <td>Days</td>
            <td>Time</td>
            <td>Location</td>
            <td>Seats Left</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, i) in availabeSection">
            <tr v-if="item.meetings[0]" :key="i">
              <td>
                {{ item.meetings[0].days }}
              </td>
              <td>
                {{ item.meetings[0].start_time }} -
                {{ item.meetings[0].end_time }}
              </td>
              <td>{{ item.meetings[0].location }}</td>
              <td>{{ item.meetings[0].meeting_number }}</td>
              <td><button>Enroll</button></td>
            </tr>
          </template>
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
  h2,
  p {
    text-align: left;
  }
}
@media screen and (min-width: map-get($break-point , "lg")) {
  .course {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "link link"
      "heading heading"
      "table aside";
    &__heading {
      grid-area: heading;
      text-align: left;
    }
    &__back-link {
      grid-area: link;
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
import { FormPlugin, BForm, BFormText, BFormInput } from "bootstrap-vue";
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
      availabeSection: [
        {
          meetings: [
            {
              days: "",
              end_time: "",
              location: "",
              start_time: "",
            },
          ],
        },
      ],
    };
  },
  props: ["courseName"],
  mounted: function () {
    let getCourseName = this.$route.params.courseName;
    Vue.axios
      .get(
        `https://api.metalab.csun.edu/curriculum/api/2.0/classes/${getCourseName}`
      )
      .then((resp) => {
        this.availabeSection = resp.data.classes;
      })
      .catch((err) => console.log(err));
  },
};
</script>