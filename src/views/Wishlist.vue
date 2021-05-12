<template>
  <div>
    <h1>Wishlist</h1>
    <ul style="text-align: left">
      <li v-for="item in displayWishlist" :key="item.wishlistId">
        <router-link
          :to="`/course/${item.courseMetadata.subject}-${item.courseMetadata.catalog_number}`"
        >
          {{
            `${item.courseMetadata.subject} ${item.courseMetadata.catalog_number} - ${item.courseMetadata.title}`
          }}
        </router-link>
        <!-- <button
          class="btn btn-sm btn-outline-secondary"
          :title="`Delete ${item.courseMetadata.subject} ${item.courseMetadata.catalog_number}`"
          @click="$emit('unbookmarkCourse', item.wishlistId)"
        >
          Remove
        </button> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Wishlist",
  data: function () {
    return {
      displayWishlist: [],
    };
  },
  props: ["wishlist"],
  mounted: function () {
    this.wishlist.forEach((element) => {
      Vue.axios
        .get(
          `https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2021/classes/${element.name}`
        )
        .then((resp) => {
          const templateData = {
            courseMetadata: resp.data.classes[0],
            wishlistId: element.id,
          };
          this.displayWishlist.push(templateData);
        })
        .catch((err) => console.log(err));
    });
  },
};
</script>

<style>
</style>