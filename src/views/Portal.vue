<template>
  <header>
    <PortalNav />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PortalNav from "../components/PortalNav.vue";
export default defineComponent({
  name: "Portal",
  components: {
    PortalNav,
  },
});
</script>
