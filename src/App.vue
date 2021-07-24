<template>
  <div>
    <el-menu mode="horizontal" class="main-menu">
      <el-menu-item index="1">
        <router-link to="/login">Login</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/registration">Registration</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/admin/registration">adminRegistration</router-link>
      </el-menu-item>
    </el-menu>
  </div>
  <MainContainer><router-view /></MainContainer>
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
