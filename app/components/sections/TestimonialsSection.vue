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
    <Swiper :loop="true" class="w-full rounded-3xl bg-dark">
      <SwiperSlide v-for="(t, i) in list" :key="i + t.name" class="p-7">
        <div
          v-if="t.image"
          class="float-left mr-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-br"
        >
          <nuxt-img
            :src="sanityImageBuilder(t.image).width(80).url()"
            :alt="t.company ?? 'Company'"
            format="webp"
            width="80"
          />
        </div>
        <div v-if="t.text" class="grow">
          <span v-if="t.name" class="font-pmedium text-xl text-heading">{{ t.name }}</span>
          <span v-if="t.name && t.position" class="text-heading">, </span>
          <span v-if="t.position" class="text-body">{{ t.position }}</span>
          <div class="text-heading">
            <span>Project: </span>
            <a
              v-if="t.url && t.project"
              :href="t.url"
              target="_blank"
              class="text-accent hover:underline"
              rel="nofollow noopener"
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
