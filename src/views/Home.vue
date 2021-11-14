<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header :title="'Home'"/>
    </template>
    <template v-slot:default>
      <div>Home</div>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DefaultLayout,
    Header
  }
});
</script>
