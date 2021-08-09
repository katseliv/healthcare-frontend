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
  background-image: url("../assets/img/main-screen.png");
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 90vh;
  height: calc(100vh - 120px);
}
h1 {
  margin-bottom: 30px;
}
h2 {
  font-style: italic;
}
@media (max-width: 768px) {
  .main-screen {
    justify-content: flex-start;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 15px;
  }
}
</style>
