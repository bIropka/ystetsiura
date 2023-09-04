<script setup lang="ts">
import { BurgerVue, NavigationList } from '~/components/layout'
import { PersonalDataType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{
  content: PersonalDataType
}>()

const isActive = ref<boolean>(false)
</script>

<template>
  <div>
    <div class="fixed left-0 right-0 top-0 z-30 h-12 bg-white">
      <div class="clear-both flex h-full w-full items-center justify-between px-5 py-0">
        <NuxtLink
          class="text font-poppins text-2xl font-extrabold uppercase leading-6 tracking-widest text-black"
          to="/"
          ><span>{{ content.logoText ?? 'logotype' }}</span></NuxtLink
        >
        <BurgerVue :is-active="isActive" @toggle-menu="() => (isActive = !isActive)" />
      </div>
    </div>
    <div
      class="fixed z-20 h-screen w-52 bg-white transition-all duration-300"
      :class="[isActive ? 'right-0' : '-right-52']"
    >
      <div
        class="relative flex h-full w-full flex-col items-end overflow-auto px-5 pb-5 pt-28 text-right"
      >
        <div v-if="content.imageSecond" class="relative h-20 w-20">
          <nuxt-img
            class="h-full w-full object-cover object-center"
            :src="sanityImageBuilder(content.imageSecond).width(80).height(80).url()"
            :alt="`${content.firstName} ${content.lastName}`"
            format="webp"
            width="80"
            height="80"
          />
        </div>
        <NavigationList
          :links="content.navs"
          type="mobile"
          class="my-12"
          @close-menu="() => (isActive = false)"
        />
        <ul class="mb-4 flex items-center justify-end">
          <li v-for="(item, i) in content.socialList" :key="i + item.title" class="ml-2">
            <NuxtLink
              v-if="item.url && item.icon"
              :to="item.url"
              target="_blank"
              :title="item.title"
            >
              <nuxt-img
                :src="sanityImageBuilder(item.icon).url()"
                :alt="`${content.firstName} ${content.lastName}, ${item.title}`"
                format="svg"
              />
            </NuxtLink>
          </li>
        </ul>
        <div class="float-left w-full">
          <p class="font-poppins text-[#333]">Copyright &copy; {{ new Date().getFullYear() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
