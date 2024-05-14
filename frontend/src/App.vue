<template>
  <div id="app">
    <TopBar />
    <div class="spacer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  components: {
    TopBar
  }
};
</script>

<style>
.spacer {
  height: 50px;
}
</style>
