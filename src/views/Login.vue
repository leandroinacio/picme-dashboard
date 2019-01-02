<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <b-alert
        variant="danger"
        :show="errors.any()"
      >{{ errors.items.length && errors.items[0].msg }}</b-alert>
      <form>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            name="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model.trim="email"
            v-validate="'required|email'"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            v-model="password"
            v-validate="'required'"
            type="password"
            class="form-control"
            id="inputPassword"
            name="Password"
            placeholder="Password"
          >
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import bAlert from "bootstrap-vue/es/components/alert/alert";

export default {
  data: () => {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.errors.items.length) {
        this.$store.dispatch("security/login", {
          username: this.email,
          password: this.password
        });
      }
    }
  },
  components: { bAlert }
};
</script>
