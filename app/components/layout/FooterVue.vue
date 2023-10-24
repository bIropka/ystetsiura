<script setup lang="ts">
import { SocialType } from '~/types'
import SocialList from '~/components/common/SocialList.vue'
import GridVue from '~/components/layout/GridVue.vue'

defineProps<{
  list: SocialType[]
  name: string
}>()
</script>

<template>
  <footer class="3xl:block fixed inset-x-0 bottom-0 z-10 hidden h-16 w-full bg-white">
    <GridVue classes="flex items-center justify-between">
      <span class="font-poppins text-text-heading">
        Copyright &copy; {{ new Date().getFullYear() }}
      </span>
      <SocialList v-if="list" :list="list" :name="name" />
    </GridVue>
  </footer>
</template>

<style scoped lang="css"></style>
