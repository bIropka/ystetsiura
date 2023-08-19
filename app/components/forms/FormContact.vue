<script setup lang="ts">
import { $fetch } from 'ofetch'
import { ContactFormDataType } from '~/types'

const form = ref<any>(null)
const valid = ref<boolean>(false)
const fullname = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const loading = ref<boolean>(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)
const nameRules = [(value: string) => (value ? true : 'Name is required.')]
const emailRules = [
  (value: string) => (value ? true : 'E-mail is requred.'),
  (value: string) => (/.+@.+\..+/.test(value) ? true : 'E-mail must be valid.'),
]
const messageRules = [(value: string) => (value ? true : 'Message is required.')]

const lambdasUrl = import.meta.env.VITE_LAMBDAS_URL

const onInput = () => {
  errorMessage.value = null
  successMessage.value = null
}

const submit = (event: SubmitEvent) => {
  event.preventDefault()
  if (!valid.value) return
  if (!lambdasUrl) {
    errorMessage.value = 'Currently this form unavailable, please try later!'
    return
  }
  loading.value = true
  $fetch(`${lambdasUrl}contact-form`, {
    method: 'POST',
    headers: { 'Cache-Control': 'no-cache' },
    body: {
      fullname: fullname.value,
      email: email.value,
      message: message.value,
    } as ContactFormDataType,
  })
    .then((res) => {
      form.value?.reset()
      form.value?.resetValidation()
      successMessage.value = res.message
    })
    .catch(() => {
      /** todo logging
      console.log(error.data.message)
      */
      errorMessage.value = 'Oops! Something went wrong, please try again later.'
    })
    .finally(() => (loading.value = false))
}
</script>

<template>
  <v-form ref="form" v-model="valid" @submit="submit">
    <v-container class="!p-0">
      <v-row class="!p-0 !my-0 !-mx-3">
        <v-col cols="12" md="6" class="!py-1 !px-3">
          <v-text-field
            v-model="fullname"
            :rules="nameRules"
            label="Full Name"
            variant="outlined"
            rounded="xl"
            class="text-body"
            required
            @input="onInput"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="!py-1 !px-3">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            variant="outlined"
            rounded="xl"
            class="text-body"
            required
            @input="onInput"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12" class="!py-1 !px-3">
          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Your Message"
            variant="outlined"
            rounded="xl"
            class="text-body"
            required
            @input="onInput"
          ></v-textarea>
        </v-col>

        <v-col cols="12" md="12" class="!py-1 !px-3">
          <span v-if="errorMessage" class="text-error">{{ errorMessage }}</span>
          <span v-if="successMessage" class="text-success">{{ successMessage }}</span>
        </v-col>
      </v-row>
      <div class="flex justify-end mt-4">
        <v-btn
          type="submit"
          size="x-large"
          class="!bg-gradient-to-br !from-grad-start !to-grad-stop !rounded-3xl !text-heading"
          :loading="loading"
        >
          <span>Send Message</span>
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<style scoped lang="css"></style>
