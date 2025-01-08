// sanity.config.js
import { defineConfig } from 'sanity';
import schemas from './schemas/schema';
import { structureTool } from 'sanity/structure';
import deskStructure from './deskStructure';

export default defineConfig({
  title: 'Alvin Sovereign Website',
  projectId: 'm1k5qb2c',
  dataset: 'production',
  plugins: [structureTool({ structure: deskStructure })],
  schema: {
    types: schemas,
  },
});
