<template>
  <div>
    <header class="fixed left-0 top-0 right-0 h-14">
      <slot name="header"></slot>
    </header>
    <main name="main" class="mx-auto pt-14 px-6 max-w-screen-md">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout',
});
</script>