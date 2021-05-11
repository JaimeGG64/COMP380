<template>
  <div>
    <h1>Wishlist</h1>
    <ul>
      <li v-for="(item, i) in wishlist" :key="i">{{ item.name }}</li>
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