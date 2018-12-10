import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/Auth/Login.vue";
import User from "./components/User/UserIndex.vue";
import UserCreate from "./components/User/UserCreate.vue";
import Role from "./components/Role/RoleIndex.vue";
import RoleCreate from "./components/Role/RoleCreate.vue";
import Permission from "./components/Permission/PermissionIndex.vue";
import PermissionCreate from "./components/Permission/PermissionCreate.vue";
import Location from "./components/Location/LocationIndex.vue";
import LocationCreate from "./components/Location/LocationCreate.vue";
import Picture from "./components/Picture/PictureIndex.vue";
import PictureCreate from "./components/Picture/PictureCreate.vue";
import Face from "./components/Face/FaceIndex.vue";
import FaceCreate from "./components/Face/FaceCreate.vue";

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
      path: "/logoff",
      name: "login",
      component: Login
    },
    {
      path: "/users",
      name: "user",
      component: User
    },
    {
      path: "/userCreate",
      name: "userCreate",
      component: UserCreate
    },
    {
      path: "/roles",
      name: "role",
      component: Role
    },
    {
      path: "/roleCreate",
      name: "roleCreate",
      component: RoleCreate
    },
    {
      path: "/permissions",
      name: "permission",
      component: Permission
    },
    {
      path: "/permissionCreate",
      name: "permissionCreate",
      component: PermissionCreate
    },
    {
      path: "/locations",
      name: "location",
      component: Location
    },
    {
      path: "/locationCreate",
      name: "locationCreate",
      component: LocationCreate
    },
    {
      path: "/pictures",
      name: "picture",
      component: Picture
    },
    {
      path: "/pictureCreate",
      name: "pictureCreate",
      component: PictureCreate
    },
    {
      path: "/faces",
      name: "face",
      component: Face
    },
    {
      path: "/faceCreate",
      name: "faceCreate",
      component: FaceCreate
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
