<script setup lang="ts">
import { PerkType } from '~/types/common'

defineProps<{ content: PerkType[] }>()
</script>

<template>
  <div class="skills float-left clear-both mb-[65px] h-auto w-full">
    <div class="wrapper float-left clear-both flex h-auto w-full justify-between">
      <div class="programming w-[40%]">
        <div class="cavani_tm_title float-left clear-both h-auto w-full overflow-hidden">
          <span
            class="relative inline-block font-poppins font-bold uppercase tracking-[8px] text-[#333]"
            >Programming</span
          >
        </div>
        <div class="cavani_progress float-left clear-both mt-[55px] h-auto w-full">
          <div class="progress_inner" data-value="95">
            <span><span class="label">HTML &amp; CSS</span><span class="number">95%</span></span>
            <div class="background">
              <div class="bar"><div class="bar_in"></div></div>
            </div>
          </div>
          <div class="progress_inner" data-value="80">
            <span><span class="label">JavaScript</span><span class="number">80%</span></span>
            <div class="background">
              <div class="bar"><div class="bar_in"></div></div>
            </div>
          </div>
          <div class="progress_inner" data-value="90">
            <span><span class="label">WordPress</span><span class="number">90%</span></span>
            <div class="background">
              <div class="bar"><div class="bar_in"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="language w-[50%]">
        <div class="cavani_tm_title float-left clear-both h-auto w-full overflow-hidden">
          <span
            class="relative inline-block font-poppins font-bold uppercase tracking-[8px] text-[#333]"
            >Language</span
          >
        </div>
        <div class="circular_progress_bar float-left clear-both mt-[62px] h-auto w-full">
          <ul>
            <li>
              <div class="list_inner">
                <div class="myCircle" data-value="0.95"></div>
                <div class="title"><span>English</span></div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="myCircle" data-value="0.8"></div>
                <div class="title"><span>Russian</span></div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="myCircle" data-value="0.9"></div>
                <div class="title"><span>Arabic</span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
