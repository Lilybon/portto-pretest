<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['AssetList']">
      <component :is="Component" :key="user?.coinbase ?? 'guest'" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, readonly } from 'vue';
import Web3 from 'web3';
import { User } from './types';
import { UserKey } from './symbols';

export default defineComponent({
  name: 'App',
  setup () {
    let web3: Web3 | null = null;

    const user: User = reactive({
      coinbase: undefined,
      error: undefined
    });

    const login = async () => {
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        user.error = 'Please install Metamask first.';
        return;
      }


      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(ethereum);
      } catch (error) {
        user.error = 'You need to allow Metamask.';
        return;
      }

      const coinbase = await web3.eth.getCoinbase();
      if (!coinbase) {
        user.error = 'Please activate MetaMask first.';
        return;
      }
      user.coinbase = coinbase;
    };

    login();
    provide(UserKey, readonly(user));
    provide('login', login);

    return {
      user
    }
  }
});
</script>
