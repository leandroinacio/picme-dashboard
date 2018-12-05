import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/Auth/Login.vue";
import User from "./components/User/UserIndex.vue";
import Role from "./components/Role/RoleIndex.vue";
import Permission from "./components/Permission/PermissionIndex.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/users",
      name: "user",
      component: User
    },
    {
      path: "/roles",
      name: "role",
      component: Role
    },
    {
      path: "/permissions",
      name: "permission",
      component: Permission
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
