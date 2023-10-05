<script setup lang="ts">
import { Component } from 'vue'
import { EduExpType } from '~/types/common'

defineProps<{ title: String; content: EduExpType[]; icon?: Component }>()

/* const getDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))

const filtered = ref<Set<string>>(new Set())

const updateFiltered = (perk: string) =>
  filtered.value.has(perk) ? filtered.value.delete(perk) : filtered.value.add(perk) */
</script>

<template>
  <div class="experience w-1/2">
    <div class="cavani_tm_title float-left clear-both h-auto w-full overflow-hidden">
      <span
        class="relative inline-block font-poppins font-bold uppercase tracking-[8px] text-[#333]"
        >Experience</span
      >
    </div>
    <div class="list float-left clear-both h-auto w-full">
      <div class="univ float-left clear-both mt-[55px] h-auto w-full">
        <ul class="relative inline-block pt-[10px]">
          <li class="relative float-left w-full pb-[45px] pl-[20px]">
            <div class="list_inner relative clear-both flex h-auto w-full">
              <div class="time w-1/2 pr-[20px]">
                <span
                  class="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] px-[25px] py-[5px] text-[14px]"
                  >2018 - running</span
                >
              </div>
              <div class="place w-1/2 pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">Envato Elements</h3>
                <span class="text-[14px]">Exclusive Author</span>
              </div>
            </div>
          </li>
          <li class="relative float-left w-full pb-[45px] pl-[20px]">
            <div class="list_inner relative clear-both flex h-auto w-full">
              <div class="time w-1/2 pr-[20px]">
                <span
                  class="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] px-[25px] py-[5px] text-[14px]"
                  >2015 - 2018</span
                >
              </div>
              <div class="place w-1/2 pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">Avo Corporation</h3>
                <span class="text-[14px]">Content Manager</span>
              </div>
            </div>
          </li>
          <li class="relative float-left w-full pl-[20px]">
            <div class="list_inner relative clear-both flex h-auto w-full">
              <div class="time w-1/2 pr-[20px]">
                <span
                  class="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] px-[25px] py-[5px] text-[14px]"
                  >2012 - 2015</span
                >
              </div>
              <div class="place w-1/2 pl-[20px]">
                <h3 class="mb-[2px] text-[16px] font-semibold">FC Barcelona</h3>
                <span class="text-[14px]">Football Player</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.decorated {
  @apply z-[1] before:absolute before:-left-5 before:top-3 before:-z-[1] before:block before:h-[calc(100%+14px)] before:w-px before:bg-br before:content-[''];
}
</style>
