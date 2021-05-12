<template>
  <div id="app">
    <Navbar @logout="logout" />
    <router-view
      :user="user"
      :wishlist="wishlist"
      @bookmarkCourse="bookmarkCourse"
      @unbookmarkCourse="unbookmarkCourse"
    />
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
      wishlist: [],
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/login");
        });
    },
    bookmarkCourse(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("wishlistCourse")
        .add({
          name: payload,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
    },
    unbookmarkCourse(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("wishlistCourse")
        .doc(payload)
        .delete();
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        db.collection("users")
          .doc(this.user.uid)
          .collection("wishlistCourse")
          .orderBy("name")
          .onSnapshot((snapshot) => {
            const snapData = [];
            snapshot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
              });
            });
            this.wishlist = snapData;
          });
      }
    });
  },
};
</script>