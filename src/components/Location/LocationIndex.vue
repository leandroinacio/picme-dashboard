<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <router-link to="/locationCreate" tag="button" class="btn btn-primary">Add Location</router-link>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <location-list></location-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import LocationList from "@/components/Location/LocationList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  components: {
    LocationList
  }
};
</script>
