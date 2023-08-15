<script setup lang="ts">
import SocialIcon from '~/components/common/SocialIcon.vue'
import sanityImageBuilder from '~/api/sanity-image-builder'
import { PersonalDataType } from '~/types'

defineProps<{
  content: PersonalDataType
}>()
</script>

<template>
  <header v-if="content" class="flex bg-board w-full p-5 col-span-6 rounded-3xl relative -mt-24">
    <div class="w-1/2 pr-7 pl-40 border-br border-solid border-r">
      <div
        v-if="content.image"
        class="w-36 h-36 rounded-[32px] overflow-hidden border-[6px] border-board absolute left-7 -top-7"
      >
        <nuxt-img
          class="w-full h-full object-cover object-top"
          :src="sanityImageBuilder(content.image).width(132).height(132).url()"
          :alt="content.firstName + ' ' + content.lastName"
          format="webp"
          width="132"
          height="132"
        />
      </div>
      <h2 v-if="content.firstName && content.lastName" class="text-2xl font-pmedium text-heading">
        {{ content.firstName }} {{ content.lastName }}
      </h2>
      <span v-if="content.position" class="text-body text-sm">{{ content.position }}</span>
      <ul class="flex items-center mt-3">
        <li v-for="link in content.socialList" :key="link.url" class="mx-1">
          <a
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="text-body hover:text-accent"
          >
            <SocialIcon :type="link.title" />
          </a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 grid grid-cols-2 pl-7">
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">email</div>
        <div class="text-sm text-heading mt-1">{{ content.email }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Birthday</div>
        <div class="text-sm text-heading mt-1">{{ content.birthday }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Phone</div>
        <div class="text-sm text-heading mt-1">{{ content.phone }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Location</div>
        <div class="text-sm text-heading mt-1">{{ content.location }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
