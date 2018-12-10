<template>
  <div>
    <!-- Create button -->
    <div class="row justify-content-end">
      <div class="col-1">
        <router-link to="/pictureCreate" tag="button" class="btn btn-primary">Add Picture</router-link>
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
  components: {
    PictureList
  }
};
</script>
