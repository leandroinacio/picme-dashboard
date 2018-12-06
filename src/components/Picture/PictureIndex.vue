<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <button @click="goToCreatePicture" class="btn btn-primary">Add Picture</button>
      </div>
    </div>
    <!-- /Create button -->
    <!-- Table -->
    <div class="row justify-content-md-center">
      <div class="col">
        <picture-list></picture-list>
      </div>
    </div>
    <!-- /Table -->
  </div>
</template>

<script>
import PictureList from "@/components/Picture/PictureList";

export default {
  data: () => {
    return {
      teste: "teste"
    };
  },
  methods: {
    goToCreatePicture() {
      this.$router.push({ name: "pictureCreate" });
    }
  },
  components: {
    PictureList
  }
};
</script>
