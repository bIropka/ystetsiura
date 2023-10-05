<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { TestimonialType } from '~/types/common'

defineProps<{
  list: TestimonialType[]
}>()

register()
</script>

<template>
  <div class="testimonials float-left clear-both mb-[90px] h-auto w-full">
    <div class="cavani_tm_title float-left clear-both h-auto w-full overflow-hidden">
      <span
        class="relative inline-block font-poppins font-bold uppercase tracking-[8px] text-[#333]"
        >Testimonials</span
      >
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
  </div>
</template>

<style scoped lang="css"></style>
