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

  projectId: '0xmdj6su',
  dataset: 'production',

  plugins: [
    iconPicker(),
    codeInput(),
    colorInput(),
    visionTool(),
    /*googleMapsInput({
      apiKey: '',
    }),*/
    deskTool({ structure }),
  ],

  schema: {
    types: schemaTypes,
  },
})
