<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header :title="'List'"/>
    </template>
    <template v-slot:default>
      <div class="py-2 flex flex-wrap">
        <RouterLink
          v-for="asset in assets"
          :key="asset.name"
          :to="{
            name: 'AssetDetail',
            params: {
              contractAddress: asset.asset_contract.address,
              tokenId: asset.token_id
            }
          }"
          class="mb-2 px-1 w-1/2"
        >
          <AssetCard
            :imageUrl="asset.image_url"
            :name="asset.name"
          />
        </RouterLink>
      </div>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import AssetCard from '@/components/AssetCard.vue';

export default defineComponent({
  name: 'AssetList',
  components: {
    DefaultLayout,
    Header,
    AssetCard
  },
  setup () {
    const assets = ref(Array.from(Array(6), (_, index) => ({
      token_id: `token-${index}`,
      asset_contract: {
        address: `address-${index}`
      },
      image_url: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      name: `cat-${index}`
    })));

    return {
      assets
    };
  }
});
</script>
