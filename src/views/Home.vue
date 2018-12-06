<template>
  <div>
    <b-navbar type="primary" variant="light" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item to="/users">Users</b-nav-item>
          <b-nav-item to="/roles">Roles</b-nav-item>
          <b-nav-item to="/permissions">Permissions</b-nav-item>
          <b-nav-item to="/faces">Faces</b-nav-item>
          <b-nav-item to="/pictures">Pictures</b-nav-item>
          <b-nav-item to="/locations">Locations</b-nav-item>
          <b-nav-item to="/analytics">Analytics</b-nav-item>
          <b-nav-item to="/logoff">Logoff</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
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
