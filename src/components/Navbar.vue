<template>
  <div>
    <b-nav fill v-if="$route.name === 'student'">
      <b-nav-item>CSUN Classes</b-nav-item>
      <b-nav-form>
        <b-form-input aria-label="Input" class="mr-1"></b-form-input>
        <b-button>Search</b-button>
      </b-nav-form>
      <b-nav-item>View My Classes</b-nav-item>
      <b-nav-item>Enroll in Classes</b-nav-item>
      <b-nav-item @click="$emit('logout')">Logout</b-nav-item>
    </b-nav>
    <b-nav fill v-if="$route.name === 'instructor'">
      <b-nav-item>CSUN Classes</b-nav-item>
      <b-nav-item>View My Classes</b-nav-item>
      <b-nav-item @click="$emit('logout')">Logout</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem, BFormInput, BNavForm, BButton } from "bootstrap-vue";

export default {
  components: {
    "b-nav": BNav,
    "b-nav-item": BNavItem,
    "b-nav-form": BNavForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
  },
};
</script>