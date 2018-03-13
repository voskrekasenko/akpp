export default function tableLinks($resource) {
  return $resource('/api/table-links/:id', { id: '@_id' }, {
    update: {
      method: 'PUT',
    },
  });
}
