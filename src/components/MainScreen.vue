<template>
  <div class="main-screen">
    <h1>Healthcare</h1>
    <h2>Лечим и подлечиваем</h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.main-screen {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  background-image: url("../assets/img/main-screen.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  height: calc(100vh - 80px);
}
h1 {
  margin-bottom: 30px;
}
h2 {
  font-style: italic;
}
</style>
