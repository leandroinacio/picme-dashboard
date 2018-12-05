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
      <router-link to="/analytics">Analytics</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous"
    >
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
