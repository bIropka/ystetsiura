<script setup lang="ts">
import { BurgerVue, NavigationList } from '~/components/layout'
import { PersonalDataType } from '~/types'

defineProps<{
  content: PersonalDataType
}>()
</script>

<template>
  <div>
    <div class="fixed left-0 right-0 top-0 z-[15] hidden h-[50px] bg-white middle:block">
      <div class="clear-both flex h-full w-full items-center justify-between px-[20px] py-0">
        <NuxtLink
          class="text font-poppins text-[22px] font-extrabold uppercase leading-[50px] tracking-[2px] text-black"
          to="/"
          ><span>itetsiura</span></NuxtLink
        >
        <BurgerVue />
      </div>
    </div>
    <div
      class="fixed right-[-200px] top-[50px] z-[15] h-[100vh] w-[200px] bg-white transition-all duration-300"
    >
      <div class="inner relative h-full w-full px-[20px] pb-[20px] pt-[70px] text-right">
        <div class="wrapper">
          <div class="avatar relative float-right mb-[60px] h-[70px] w-[70px]">
            <div
              class="image absolute inset-0 bg-cover bg-center bg-no-repeat"
              data-img-url="assets/img/about/1.jpg"
            ></div>
          </div>
          <NavigationList :links="content.navs" type="mobile" />
          <!--          <div class="social float-left mb-[5px] w-full">
            <ul>
              <li class="mr-[8px] inline-block">
                <a class="text-[#333]" href="#"
                  ><img class="svg" src="assets/img/svg/social/facebook.svg" alt=""
                /></a>
              </li>
              <li class="mr-[8px] inline-block">
                <a class="text-[#333]" href="#"
                  ><img class="svg" src="assets/img/svg/social/twitter.svg" alt=""
                /></a>
              </li>
              <li class="mr-[8px] inline-block">
                <a class="text-[#333]" href="#"
                  ><img class="svg" src="assets/img/svg/social/instagram.svg" alt=""
                /></a>
              </li>
              <li class="mr-[8px] inline-block">
                <a class="text-[#333]" href="#"
                  ><img class="svg" src="assets/img/svg/social/dribbble.svg" alt=""
                /></a>
              </li>
              <li class="inline-block">
                <a class="text-[#333]" href="#"
                  ><img class="svg" src="assets/img/svg/social/tik-tok.svg" alt=""
                /></a>
              </li>
            </ul>
          </div>-->
          <div class="float-left w-full">
            <p class="font-poppins text-[#333]">Copyright &copy; {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
