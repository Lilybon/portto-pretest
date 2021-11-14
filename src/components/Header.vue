<template>
  <div class="px-6 h-full border-b border-solid border-gray bg-white">
    <div class="relative flex items-center justify-center h-full">
      <button class="absolute left-0 top-1/2 transform -translate-y-1/2 text-xs" @click="handleBack">Back</button>
      <h2 class="font-bold capitalize">{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
  },
  setup () {
    const router = useRouter();
    const handleBack = () => {
      router.go(-1);
    };
    return {
      handleBack
    };
  }
});
</script>