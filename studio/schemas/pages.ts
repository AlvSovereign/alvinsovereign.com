export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'experience' }] }],
    },
  ],
};
