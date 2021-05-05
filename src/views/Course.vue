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
                {{ dayName(item.meetings[0].days) }}
              </td>
              <td>
                {{ modifyTime(item.meetings[0].start_time) }} –
                {{ modifyTime(item.meetings[0].end_time) }}
              </td>
              <td>{{ item.meetings[0].location }}</td>
              <td>{{ item.enrollment_cap - item.enrollment_count }}</td>
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
  props: ["courseName", "user"],
  methods: {
    modifyTime(time) {
      let time_mod = "";
      let num;
      if (time.charAt(0) === "0") {
        time_mod =
          time.charAt(1) + ":" + time.charAt(2) + time.charAt(3) + " AM";
      } else if (
        time.charAt(0) === "1" &&
        (time.charAt(1) === "1" ||
          time.charAt(1) === "2" ||
          time.charAt(1) === "0")
      ) {
        time_mod =
          time.charAt(0) +
          time.charAt(1) +
          ":" +
          time.charAt(2) +
          time.charAt(3) +
          " AM";
      } else {
        num = Number(time.charAt(0) + time.charAt(1)) - 12;
        time_mod = num + ":" + time.charAt(2) + time.charAt(3) + " PM";
      }

      return time_mod;
    },
    dayName(day) {
      let day_mod = "";

     
      for (let i = 0; i < day.length; i++) {
        if (day.charAt(i) === "M") {
          day_mod += "Mo";
        } else if (day.charAt(i) === "T") {
          day_mod += "Tu";
        } else if (day.charAt(i) === "W") {
          day_mod += "We";
        } else if (day.charAt(i) === "R") {
          day_mod += "Th";
        } else if (day.charAt(i) === "F") {
          day_mod += "Fr";
        } else if (day.charAt(i) === "S") {
          day_mod += "Sa";
        }
      }
      return day_mod;
    },
  },
  mounted: function () {
    let getCourseName = this.$route.params.courseName;
    Vue.axios
      .get(
        `https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2021/classes/${getCourseName}`
      )
      .then((resp) => {
        this.availabeSection = resp.data.classes;
      })
      .catch((err) => console.log(err));
  },
};
</script>