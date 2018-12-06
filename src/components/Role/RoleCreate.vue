<template>
  <div class="row">
    <div class="col-md-4">
      <form>
        <div class="form-group">
          <label for="nameInput">Name</label>
          <input type="text" class="form-control" id="nameInput" placeholder="Role">
        </div>
        <div class="form-group">
          <label for="permissionSelect">Permissions</label>
          <select multiple class="form-control" id="permissionSelect">
            <option>PERMISSION_1</option>
            <option>PERMISSION_1</option>
            <option>PERMISSION_3</option>
            <option>PERMISSION_4</option>
            <option>PERMISSION_5</option>
          </select>
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
