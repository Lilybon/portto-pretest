<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header :title="asset.collection.name"/>
    </template>
    <template v-slot:default>
      <div class="flex flex-col items-center pt-2 px-2 pb-14">
        <img
          class="w-full"
          v-lazy="asset.image_url"
          :alt="`${asset.name} image`"
        />
        <h5 class="mb-2 font-bold text-2xl">{{ asset.name }}</h5>
        <p>{{ asset.description }}</p>
        <div class="fixed left-0 right-0 bottom-0 px-3 py-2 h-12 border-t border-solid border-gray bg-white">
          <a
            rel="noopener"
            :href="asset.permalink"
            target="_blank"
            class="block w-full h-full"
          >
            <VButton class="w-full">permalink</VButton>
          </a>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import VButton from '@/components/VButton.vue';
import opensea from '@/api/opensea';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AssetDetail',
  components: {
    DefaultLayout,
    Header,
    VButton
  },
  setup () {
    const route = useRoute();

    const asset = reactive({
      image_url: '',
      name: '',
      description: '',
      permalink: '',
      collection: {
        name: ''
      }
    });

    const fetchAssetDetail = async (contractAddress: string, tokenId: string) => {
      try {
        const {
          image_url,
          name,
          description,
          permalink,
          collection
        } = await opensea.fetchAssetDetail(contractAddress, tokenId);
        asset.image_url = image_url;
        asset.name = name;
        asset.description = description;
        asset.permalink = permalink;
        asset.collection.name = collection.name;
      } catch (error) {
        console.error(error)
      }
    };

    fetchAssetDetail(route.params.contractAddress as string, route.params.tokenId as string);
    
    return {
      asset
    };
  }
});
</script>