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
        <v-card class="!bg-transparent !flex justify-start items-start">
          <div
            v-if="item.text"
            class="border border-black-tr py-6 px-8 text-text-basic mb-6 order-2 grow"
          >
            {{ item.text }}
          </div>
          <div class="shrink-0 flex items-center justify-start order-1">
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
  <!--  <div class="testimonials float-left clear-both mb-[90px] h-auto w-full">
    <div class="cavani_tm_title float-left clear-both h-auto w-full overflow-hidden">
      <span
        class="relative inline-block font-poppins font-bold uppercase tracking-[8px] text-[#333]"
      >
        Testimonials
      </span>
    </div>
    <div class="list float-left clear-both mt-[75px] h-auto w-full">
      <ul class="owl-carousel cursor-e-resize">
        <li>
          <div class="list_inner relative float-left clear-both h-auto w-full">
            <div
              class="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]"
            >
              <i class="icon-quote-left absolute left-[50px] top-[-29px] z-[1] text-[30px]"></i>
              <p>
                Beautiful minimalist design and great, fast response with support. Highly recommend.
                Thanks Marketify!
              </p>
            </div>
            <div class="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
              <div class="image relative h-[60px] w-[60px]">
                <div
                  class="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                  data-img-url="assets/img/testimonials/1.jpg"
                ></div>
              </div>
              <div class="info pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">Alexander Walker</h3>
                <span class="text-[14px]">Graphic Designer</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list_inner relative float-left clear-both h-auto w-full">
            <div
              class="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]"
            >
              <i class="icon-quote-left absolute left-[50px] top-[-29px] z-[1] text-[30px]"></i>
              <p>
                These people really know what they are doing! Great customer support availability
                and supperb kindness.
              </p>
            </div>
            <div class="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
              <div class="image relative h-[60px] w-[60px]">
                <div
                  class="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                  data-img-url="assets/img/testimonials/2.jpg"
                ></div>
              </div>
              <div class="info pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">Armin Van Buuren</h3>
                <span class="text-[14px]">Content Manager</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list_inner relative float-left clear-both h-auto w-full">
            <div
              class="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]"
            >
              <i class="icon-quote-left absolute left-[50px] top-[-29px] z-[1] text-[30px]"></i>
              <p>
                I had a little problem and the support was just awesome to quickly solve the
                situation. And keep going on.
              </p>
            </div>
            <div class="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
              <div class="image relative h-[60px] w-[60px]">
                <div
                  class="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                  data-img-url="assets/img/testimonials/3.jpg"
                ></div>
              </div>
              <div class="info pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">Baraka Clinton</h3>
                <span class="text-[14px]">English Teacher</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>-->
</template>

<style scoped lang="css"></style>
