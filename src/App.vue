<template>
  <div id="app">
    <Navbar />
    <router-view :user="user" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Navbar from "./components/Navbar";
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "app",
  components: {
    Navbar: Navbar,
  },
  data: function () {
    return {
      user: null,
      error: null,
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        db.collection("users").doc(this.user.uid);
      }
    });
  },
};
</script>