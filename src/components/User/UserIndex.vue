<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <button type="button" class="btn btn-primary">Add User</button>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <user-list></user-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import UserList from "@/components/User/UserList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  components: {
    UserList
  }
};
</script>
