<script setup lang="ts">
import { getPersonalData } from '~/api/queries'
import SocialIcon from '~/components/common/SocialIcon.vue'
import sanityInageBuilder from '~/api/sanity-inage-builder'

const { data } = useAsyncData('personal-data', getPersonalData)
</script>

<template>
  <header v-if="data" class="flex bg-board w-full p-5 col-span-6 rounded-3xl relative -mt-24">
    <div class="w-1/2 pr-7 pl-40 border-br border-solid border-r">
      <div
        v-if="data.image"
        class="w-36 h-36 rounded-[32px] overflow-hidden border-[6px] border-board absolute left-7 -top-7"
      >
        <img
          class="w-full h-full object-cover object-top"
          :src="sanityInageBuilder(data.image).url()"
          :alt="data.firstName + ' ' + data.lastName"
          width="132"
          height="132"
        />
      </div>
      <h2 v-if="data.firstName && data.lastName" class="text-2xl font-pmedium text-heading">
        {{ data.firstName }} {{ data.lastName }}
      </h2>
      <span v-if="data.position" class="text-body text-sm">{{ data.position }}</span>
      <ul class="flex items-center mt-3">
        <li v-for="link in data.socialList" :key="link.url" class="mx-1">
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
        <div class="text-sm text-heading mt-1">{{ data.email }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Birthday</div>
        <div class="text-sm text-heading mt-1">{{ data.birthday }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Phone</div>
        <div class="text-sm text-heading mt-1">{{ data.phone }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Location</div>
        <div class="text-sm text-heading mt-1">{{ data.location }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
