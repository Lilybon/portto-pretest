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
        <p class="my-3 w-full text-center">{{ noMoreAssets ? 'No more assets' : loading ? 'Loading...' : '' }}</p>
        <InfiniteLoading @infinite="addMore" />
      </div>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, inject, Ref, ref } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import AssetCard from '@/components/AssetCard.vue';
import InfiniteLoading from '@/components/InfiniteLoading.vue'
import { MemberDetailRES, MemberListRES } from '@/api/types';
import { useConditionWatcher } from 'vue-condition-watcher';
import opensea from '@/api/opensea'
import { UserKey } from '@/symbols';

export default defineComponent({
  name: 'AssetList',
  components: {
    DefaultLayout,
    Header,
    AssetCard,
    InfiniteLoading
  },
  setup () {
    const user = inject(UserKey);

    const assets: Ref<MemberDetailRES[]> = ref([]);
    const noMoreAssets: Ref<boolean> = ref(false);
    
    const { loading, conditions } = useConditionWatcher({
      defaultParams: {
        format: 'json',
        owner: user?.coinbase,
        limit: 20,
      },
      conditions: {
        offset: 0,
      },
      fetcher: opensea.fetchAssetList,
      afterFetch: (res: MemberListRES) => {
        if (res.assets.length === 0) noMoreAssets.value = true;
        assets.value.push(...res.assets);
      }
    });

    const addMore = () => {
      if (loading.value || noMoreAssets.value) return;
      conditions.offset += 20;
    };

    return {
      noMoreAssets,
      loading,
      assets,
      addMore
    };
  }
});
</script>
