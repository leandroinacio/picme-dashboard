<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <form>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" @click="test">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  methods: {
    test: () => alert("hi")
  }
};
</script>
