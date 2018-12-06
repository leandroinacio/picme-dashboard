<template>
  <div id="app" class="container-fluid">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/users">Users</router-link>|
      <router-link to="/roles">Roles</router-link>|
      <router-link to="/permissions">Permissions</router-link>|
      <router-link to="/faces">Faces</router-link>|
      <router-link to="/pictures">Pictures</router-link>|
      <router-link to="/locations">Locations</router-link>|
      <router-link to="/analytics">Analytics</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");

body {
  font-family: "Ubuntu", sans-serif !important;
}

.row {
  margin-bottom: 10px;
  padding: 40px;
}
.btn {
  margin-right: 20px;
}
.form-check {
  margin-bottom: 20px;
}
</style>
