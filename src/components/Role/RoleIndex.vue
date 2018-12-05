<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <button type="button" class="btn btn-primary">Add Role</button>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <role-list></role-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import RoleList from "@/components/Role/RoleList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  components: {
    RoleList
  }
};
</script>
