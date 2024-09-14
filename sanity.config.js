import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemaTypes/index.js'

export default defineConfig({
  name: 'default',
  title: 'Muse Cards',

  projectId: '2wlc5vj8',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
