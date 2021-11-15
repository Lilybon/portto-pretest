<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header :title="'home'"/>
    </template>
    <template v-slot:default>
      <div class="p-2">
        <h1 class="mb-4 text-5xl font-bold capitalize">welcome!</h1>
        <div class="mb-2">
          <p v-if="user?.error" class="bg-red">{{ user.error }}</p> 
          <template v-if="user?.coinbase">
            <p class="break-words">Your coinbase is {{ user.coinbase }}</p>
            <RouterLink :to="{ name: 'AssetList' }" class="underline">Navigate to AssetList</RouterLink>
          </template>
          <VButton v-else class="w-full" @click="login">Meta mask login</VButton>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import VButton from '@/components/VButton.vue';
import { UserKey } from '@/symbols';

export default defineComponent({
  name: 'Home',
  components: {
    DefaultLayout,
    Header,
    VButton
  },
  setup () {
    const user = inject(UserKey);
    const login = inject('login');
    return {
      user,
      login
    };
  }
});
</script>
