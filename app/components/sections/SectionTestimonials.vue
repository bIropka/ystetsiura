<script setup lang="ts">
import { SectionTestimonialsType } from '~/types/about-me'
import SectionTitle from '~/components/common/SectionTitle.vue'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{
  content: SectionTestimonialsType
}>()
</script>

<template>
  <div v-if="content">
    <SectionTitle v-if="content.title" :title="content.title" />
    <v-window v-if="content.list" :continuous="true" :touch="true" show-arrows="hover">
      <v-window-item v-for="item in content.list" :key="item._id">
        <v-card class="!bg-transparent lg:!flex justify-start items-start">
          <div
            v-if="item.text"
            class="border border-black-tr py-2 px-3 lg:py-6 lg:px-8 text-text-basic mb-6 order-1 lg:order-2 grow"
          >
            {{ item.text }}
          </div>
          <div class="shrink-0 flex items-center justify-start order-2 lg:order-1 mr-4">
            <div
              class="relative w-16 h-16 border border-black-tr rounded-full p-2 mr-4 bg-white overflow-hidden"
            >
              <nuxt-img
                v-if="item.image"
                class="h-full w-full object-contain object-center"
                :src="sanityImageBuilder(item.image).url()"
                :alt="item.name ?? 'The reviewer`s name'"
                format="webp"
                width="64"
                height="64"
              />
            </div>
            <div class="w-44">
              <span v-if="item.name" class="font-bold">{{ item.name }}</span>
              <span v-if="item.company" class="block my-1 font-medium">{{ item.company }}</span>
              <span v-if="item.position" class="text-text-basic italic">{{ item.position }}</span>
            </div>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped lang="css"></style>
