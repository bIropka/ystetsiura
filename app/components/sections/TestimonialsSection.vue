<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { onMounted } from 'vue'
import { SectionTitle } from '~/components/common'
import { TestimonialType } from '~/types'
import sanityInageBuilder from '~/api/sanity-inage-builder'

const props = defineProps<{
  list: TestimonialType[]
}>()

onMounted(() => {
  console.log(props.list)
})

register()
</script>

<template>
  <section class="mt-12">
    <SectionTitle text="Testimonials" />
    <swiper-container>
      <swiper-slide v-for="(t, i) in list" :key="i + t.name" class="bg-dark rounded-3xl p-7">
        <div
          v-if="t.image"
          class="shrink-0 mr-4 h-24 w-24 flex items-center justify-center float-left border border-br rounded-xl"
        >
          <img :src="sanityInageBuilder(t.image).width(80).url()" :alt="t.company ?? 'Company'" />
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
              >{{ t.project }}</a
            >
          </div>
          <p class="">{{ t.text }}</p>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped lang="css"></style>
