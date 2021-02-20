export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta description',
      type: 'text',
    },
  ],
};
