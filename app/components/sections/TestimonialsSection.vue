<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { SectionTitle } from '~/components/common'
import { TestimonialType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{
  list: TestimonialType[]
}>()

register()
</script>

<template>
  <section class="mt-12">
    <SectionTitle text="Testimonials" />
    <Swiper :loop="true" class="w-full bg-dark rounded-3xl">
      <SwiperSlide v-for="(t, i) in list" :key="i + t.name" class="p-7">
        <div
          v-if="t.image"
          class="shrink-0 mr-4 h-24 w-24 flex items-center justify-center float-left border border-br rounded-xl"
        >
          <nuxt-img
            :src="sanityImageBuilder(t.image).width(80).url()"
            :alt="t.company ?? 'Company'"
            format="webp"
            width="80"
          />
        </div>
        <div v-if="t.text" class="grow">
          <span v-if="t.name" class="text-heading font-pmedium text-xl">{{ t.name }}</span>
          <span v-if="t.name && t.position" class="text-heading">, </span>
          <span v-if="t.position" class="text-body">{{ t.position }}</span>
          <div class="text-heading">
            <span>Project: </span>
            <a
              v-if="t.url && t.project"
              :href="t.url"
              target="_blank"
              class="text-accent hover:underline"
            >
              {{ t.project }}
            </a>
          </div>
          <p class="">{{ t.text }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="css"></style>
