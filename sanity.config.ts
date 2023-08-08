import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'kreativehorizon.com',
  basePath: "/admin",
  apiVersion: '2021-03-25',
  projectId: 'laarr84g',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  useCdn: true,
  schema: {
    types: schemaTypes,
  },
})
