<template>
  <div>
    <b-navbar type="primary" variant="light" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item to="/users">User</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { Navbar } from "bootstrap-vue/es/components";
import Vue from "vue";

Vue.use(Navbar);

export default {
  name: "home"
};
</script>
