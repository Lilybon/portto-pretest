<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header :title="'home'"/>
    </template>
    <template v-slot:default>
      <div class="p-2">
        <!-- metamask login here -->
        <RouterLink :to="{ name: 'AssetList' }" class="underline">Navigate to AssetList</RouterLink>
      </div>
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
