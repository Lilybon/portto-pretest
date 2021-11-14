<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['AssetList']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
