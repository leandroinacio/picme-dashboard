<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <router-link to="/permissionCreate" tag="button" class="btn btn-primary">Add Permission</router-link>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <permission-list></permission-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import PermissionList from "@/components/Permission/PermissionList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  components: {
    PermissionList
  }
};
</script>
