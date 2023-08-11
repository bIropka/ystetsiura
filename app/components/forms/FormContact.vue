<script setup lang="ts">
import { SectionTitle } from '~/components/common'

const valid = ref<boolean>(false)
const fullname = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const nameRules = [(value: string) => (value ? true : 'Name is required.')]
const emailRules = [
  (value: string) => (value ? true : 'E-mail is requred.'),
  (value: string) => (/.+@.+\..+/.test(value) ? true : 'E-mail must be valid.'),
]
const messageRules = [(value: string) => (value ? true : 'Message is required.')]

const submit = (event: SubmitEvent) => {
  event.preventDefault()
  if (!valid.value) return
  console.log(fullname.value, email.value, message.value)
}
</script>

<template>
  <div>
    <SectionTitle text="Contact Form" />
    <v-form v-model="valid" @submit="submit">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="fullname"
              :rules="nameRules"
              label="Full Name"
              variant="outlined"
              rounded="xl"
              class="text-body"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              variant="outlined"
              rounded="xl"
              class="text-body"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Your Message"
              variant="outlined"
              rounded="xl"
              class="text-body"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <div class="flex justify-end mt-4">
          <v-btn
            type="submit"
            size="x-large"
            class="!bg-gradient-to-br !from-grad-start !to-grad-stop !rounded-3xl !text-heading"
          >
            <span>Send Message</span>
          </v-btn>
        </div>
      </v-container>
    </v-form>
    <!--    <form class="grid grid-cols-2 gap-7">
      <InputVue placeholder="Full Name" label-classes="col-span-1 text-sm" />
      <InputVue type="email" placeholder="Email Address" label-classes="col-span-1 text-sm" />
      <TextareaVue
        placeholder="Your Message"
        label-classes="col-span-2"
        textarea-classes="text-sm resize-none h-40"
      />
      <div class="col-span-2 flex justify-end">
        <button
          class="flex justify-between items-center bg-gradient-to-br from-grad-start to-grad-stop rounded-3xl px-6 py-4 text-heading"
        >
          <component :is="IconSend" color="#fff" />
          <span class="ml-2">Send Message</span>
        </button>
      </div>
    </form>-->
  </div>
</template>

<style scoped lang="css"></style>
