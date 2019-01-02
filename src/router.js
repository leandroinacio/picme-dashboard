import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
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
import store from "@/store/store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        public: true,
        onlyLoggedOut: true
      }
    },
    {
      path: "/users",
      name: "user",
      component: User,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/userCreate",
      name: "userCreate",
      component: UserCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/roles",
      name: "role",
      component: Role,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/roleCreate",
      name: "roleCreate",
      component: RoleCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/permissions",
      name: "permission",
      component: Permission,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/permissionCreate",
      name: "permissionCreate",
      component: PermissionCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/locations",
      name: "location",
      component: Location,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/locationCreate",
      name: "locationCreate",
      component: LocationCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/pictures",
      name: "picture",
      component: Picture,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/pictureCreate",
      name: "pictureCreate",
      component: PictureCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/faces",
      name: "face",
      component: Face,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    },
    {
      path: "/faceCreate",
      name: "faceCreate",
      component: FaceCreate,
      meta: {
        public: false,
        onlyLoggedOut: false
      }
    }
  ]
});

//https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut);
  const loggedIn = store.state.security.jwt;
  console.log(from);
  debugger;

  if (!isPublic && !loggedIn) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath } // Page where user will be redirected after login
    });
  }

  if (loggedIn && onlyLoggedOut) {
    return next("/");
  }

  next();
});

export default router;
