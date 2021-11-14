<template>
  <div class="flex flex-col items-center justify-center p-2 h-screen">
    <!-- metamask login here -->
    <h1 class="mb-4 text-9xl font-bold">404</h1>
    <p class="mb-2">sorry! you had navigated to an unavailable page.</p>
    <RouterLink class="underline" :to="{ name: 'Home' }">Back to Home</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>