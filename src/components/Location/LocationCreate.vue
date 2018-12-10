<template>
  <div class="row">
    <div class="col-md-4">
      <form>
        <!-- Start Date -->
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputStartDate">Start Date</label>
            <input type="text" class="form-control" id="inputStartDate" placeholder="yyyy/mm/dd">
          </div>

          <!-- End Date -->
          <div class="form-group col-md-6">
            <label for="inputEndDate">End Date</label>
            <input type="text" class="form-control" id="inputEndDate" placeholder="yyyy/mm/dd">
          </div>
        </div>

        <!-- User -->
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUser">User</label>
            <input type="text" class="form-control" id="inputUser" placeholder="123">
          </div>

          <!-- Pictures -->
          <div class="form-group col-md-6">
            <label for="inputPictures">Pictures</label>
            <input type="text" class="form-control" id="inputPictures" placeholder="1,2,3...">
          </div>
        </div>

        <!-- Location -->
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputCountry">Country</label>
            <input type="text" class="form-control" id="inputCountry">
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input type="text" class="form-control" id="inputState">
          </div>
          <div class="form-group col-md-4">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity">
          </div>
        </div>

        <!-- Refs -->
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputRef1">Reference 1</label>
            <input type="text" class="form-control" id="inputRef1">
          </div>
          <div class="form-group col-md-6">
            <label for="inputRef2">Reference 2</label>
            <input type="text" class="form-control" id="inputRef2">
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
