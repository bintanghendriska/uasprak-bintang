<script setup>
import { ref, watchEffect } from "vue";
import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";

const isLoggedIn = ref(localStorage.getItem("isLoggedIn") === "true");
const route = useRoute();

watchEffect(() => {
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
});

function handleLoginSuccess() {
  isLoggedIn.value = true;
}
</script>

<template>
  <Navbar v-if="isLoggedIn && route.path !== '/login'" />
  <main>
    <RouterView @login-success="handleLoginSuccess" />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}
</style>
