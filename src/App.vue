<template>
  <div id="app">
    <div>
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Disabled</b-nav-item>
        <b-nav-form>
          <b-form-input aria-label="Input" class="mr-1"></b-form-input>
          <b-button>Sup</b-button>
        </b-nav-form>
      </b-nav>
    </div>
    <router-view />
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
import {BNav, BNavItem, BFormInput, BNavForm, BButton}  from 'bootstrap-vue';

export default {
  components: {
    'b-nav' : BNav,
    'b-nav-item' : BNavItem,
    'b-nav-form' : BNavForm,
    'b-form-input' : BFormInput,
    'b-button' : BButton
  }
}
</script>