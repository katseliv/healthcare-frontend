<template>
  <div id="nav"></div>
  <main-container />
  <router-view />
</template>

<script lang="ts">
import MainContainer from "./views/MainContainer.vue";

export default {
  name: "App",
  components: {
    MainContainer,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
