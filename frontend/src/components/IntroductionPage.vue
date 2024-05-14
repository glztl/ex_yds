<template>
  <div>
    <NavBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style>
.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
