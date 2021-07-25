<template>
  <div>
    <el-menu mode="horizontal" class="main-menu" :router="routerMode">
      <el-menu-item index="/login"> Login </el-menu-item>
      <el-menu-item index="/registration"> Registration </el-menu-item>
      <el-menu-item index="/admin/registration">
        Admin registration
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
  data() {
    return {
      routerMode: true,
    };
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
