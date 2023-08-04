<script setup lang="ts">
import { onMounted } from 'vue'
import { getPersonalData } from '~/api/queries'
import { PersonalDataType } from '~/types'
import SanityIcon from '~/components/common/SanityIcon.vue'

const { firstName, lastName, position, email, birthday, location, phone, photo, socialList } =
  useAsyncData<PersonalDataType>('personal-data', getPersonalData)?.data?.value ?? {}

onMounted(() => {
  console.log(socialList)
})
</script>

<template>
  <header class="flex bg-surface w-full p-5 col-span-6 rounded-3xl relative -mt-24">
    <div class="w-1/2 pr-7 pl-40 border-br border-solid border-r">
      <div
        v-if="photo"
        class="w-36 h-36 rounded-[32px] overflow-hidden border-[6px] border-surface absolute left-7 -top-7"
      >
        <img
          class="w-full h-full object-cover object-top"
          :src="photo"
          :alt="firstName + ' ' + lastName"
        />
      </div>
      <h2 v-if="firstName && lastName" class="text-2xl font-pmedium text-heading">
        {{ firstName }} {{ lastName }}
      </h2>
      <span v-if="position" class="text-body text-sm">{{ position }}</span>
      <ul class="flex items-center mt-3">
        <li v-for="link in socialList" :key="link.url" class="mx-1">
          <a
            :href="link.url"
            :title="link.title"
            target="_blank"
            class="text-body hover:text-accent"
          >
            <SanityIcon :type="link.title" />
          </a>
        </li>
      </ul>
    </div>
    <div class="w-1/2 grid grid-cols-2 pl-7">
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">email</div>
        <div class="text-sm text-heading mt-1">{{ email }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Birthday</div>
        <div class="text-sm text-heading mt-1">{{ birthday }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Phone</div>
        <div class="text-sm text-heading mt-1">{{ phone }}</div>
      </div>
      <div class="my-2">
        <div class="font-pmedium text-xs uppercase text-body">Location</div>
        <div class="text-sm text-heading mt-1">{{ location }}</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css"></style>
