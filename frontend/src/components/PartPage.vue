<template>
<div class="partIContainer">
    <NavBar />
    <div class="partIContent">
    <h1>HelloWorld</h1>
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
.partIContainer {
display: flex;
}

.partIContent {
flex-grow: 1;
padding: 20px;
}
</style>
