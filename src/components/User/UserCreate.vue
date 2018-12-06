<template>
  <div class="row">
    <div class="col-md-4">
      <form>
        <div class="form-group">
          <label for="emailInput">Email</label>
          <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="firstNameInput">First Name</label>
          <input type="text" class="form-control" id="firstNameInput" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="lastNameInput">Last Name</label>
          <input type="text" class="form-control" id="lastNameInput" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" id="passwordInput">
        </div>
        <div class="form-group">
          <label for="confirmationInput">Confirm Password</label>
          <input type="password" class="form-control" id="confirmationInput">
        </div>
        <div class="form-group">
          <label for="roleSelect">Role</label>
          <select class="form-control" id="roleSelect">
            <option>Admin</option>
            <option>Support</option>
            <option>User</option>
          </select>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="activeCheckbox">
          <label class="form-check-label" for="activeCheckbox">Active</label>
        </div>

        <!-- Buttons -->
        <button type="button" class="btn btn-primary">Confirm</button>
        <button type="button" class="btn btn-primary">Cancel</button>
        <!-- /Buttons -->
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
