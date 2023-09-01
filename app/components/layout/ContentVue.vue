<script setup lang="ts"></script>

<template>
  <main
    class="cavani_tm_mainpart middle:inset-x-0 middle:bottom-0 middle:top-[55px] absolute inset-[70px] overflow-hidden"
  >
    <div class="author_image absolute bottom-0 left-0 top-0 z-[15] w-[40%]">
      <div
        class="main absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-img-url="assets/img/about/1.jpg"
      ></div>
    </div>
    <div class="main_content absolute bottom-0 right-0 top-0 w-[60%]">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="css"></style>
