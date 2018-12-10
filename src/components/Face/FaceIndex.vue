<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <router-link to="/faceCreate" tag="button" class="btn btn-primary">Add Face</router-link>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <face-list></face-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import FaceList from "@/components/Face/FaceList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  components: {
    FaceList
  }
};
</script>
