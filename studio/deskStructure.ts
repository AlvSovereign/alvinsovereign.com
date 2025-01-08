export default (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.divider(),
      // removes siteSettings from studio view
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings'].includes(item.getId())
      ),
    ]);
