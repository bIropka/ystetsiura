<script setup lang="ts">
import { SocialType } from '~/types'
import SocialList from '~/components/common/SocialList.vue'

defineProps<{
  list: SocialType[]
  name: string
}>()
</script>

<template>
  <footer class="fixed inset-x-0 bottom-0 z-10 hidden h-16 w-full bg-white 3xl:block">
    <div
      class="mx-auto flex max-w-ultra-full-hd w-full h-full items-center justify-between px-0 3xl:px-16"
    >
      <span class="font-poppins text-text-heading">
        Copyright &copy; {{ new Date().getFullYear() }}
      </span>
      <SocialList v-if="list" :list="list" :name="name" />
    </div>
  </footer>
</template>

<style scoped lang="css"></style>
