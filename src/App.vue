<template>
  <div id="app" class="container-fluid">
    <div id="nav">
      <home v-if="isLogged"></home>
      <login v-if="!isLogged"></login>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Login from "./components/Auth/Login.vue";

export default {
  data() {
    return {
      isLogged: false
    };
  },
  components: { Home, Login }
};
</script>


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
