<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import '@/styles/common.scss'

import LayoutFixedVue from './components/LayoutFixed.vue'

import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
    <LayoutFixedVue />
  <LayoutNav />
  <LayoutHeader />
  <!--添加key-->
  <RouterView :key="$route.fullPath"/>
  <LayoutFooter />
</template>