<script setup lang="ts">
import { CardProject, SectionTitle } from '~/components/common'
import CustomHead from '~/components/layout/CustomHead.vue'
import { useStore } from '~/store'

const { portfolioPage: data, categories } = useStore()

const activeCategory = ref<string | null>(null)
const setActiveCategory = (id: string | null) => (activeCategory.value = id)
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <SectionTitle v-if="data.title" :title="data.title" />
    <ul v-if="categories" class="flex mt-12 mb-8 flex-wrap">
      <li
        key="all"
        class="capitalize mr-8 text-text-heading font-poppins font-semibold cursor-pointer my-1"
        @click="setActiveCategory(null)"
      >
        all
      </li>
      <li
        v-for="category in categories"
        :key="category._id"
        class="capitalize mr-8 text-text-heading font-poppins font-semibold cursor-pointer"
        @click="setActiveCategory(category._id)"
      >
        {{ category.title }}
      </li>
    </ul>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CardProject
        v-for="(p, i) in data?.projects?.filter(
          (p) => !activeCategory || !!p.category?.find((c) => c._id === activeCategory)
        )"
        :key="i + p.title"
        :project="p"
      />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
