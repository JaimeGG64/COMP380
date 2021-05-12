<template>
  <div>
    <h1>Wishlist</h1>
    <ul>
      <li v-for="(item, i) in wishlist" :key="i">
        {{ item.name }}
        <button
          class="btn btn-sm btn-outline-secondary"
          title="Delete Meeting"
          @click="$emit('unbookmarkCourse', item.id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// import db from "../db.js";

export default {
  name: "Wishlist",
  data: function () {
    return {
      displayWishlist: [],
    };
  },
  props: ["wishlist"],
};
</script>

<style>
</style>