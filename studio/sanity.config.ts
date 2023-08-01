import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { codeInput } from '@sanity/code-input'
import { colorInput } from '@sanity/color-input'
import structure from './schemas/desk'
import { googleMapsInput } from '@sanity/google-maps-input'

export default defineConfig({
  name: 'default',
  title: 'ystetsiura',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    iconPicker(),
    codeInput(),
    colorInput(),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY ?? '',
    }),
    deskTool({ structure }),
  ],

  schema: {
    types: schemaTypes,
  },
})
