<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <button @click="goToCreateFace" class="btn btn-primary">Add Face</button>
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
  methods: {
    goToCreateFace() {
      this.$router.push({ name: "faceCreate" });
    }
  },
  components: {
    FaceList
  }
};
</script>
