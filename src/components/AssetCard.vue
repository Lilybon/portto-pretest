<template>
  <div class="border border-solid border-gray rounded overflow-hidden">
    <img class="block mx-auto w-full" v-lazy="imageUrl" :alt="`${name} image`">
    <div class="py-4 px-2 border-t border-solid border-gray text-xs font-bold" style="background-color: rgb(251, 253, 255);">
      <h5>{{ name }}</h5>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssetCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});
</script>
