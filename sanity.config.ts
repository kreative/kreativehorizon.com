import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'laarr84g',
  dataset: 'production',
  title: "Kreative Horizon",
  apiVersion: '2021-07-01',
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
