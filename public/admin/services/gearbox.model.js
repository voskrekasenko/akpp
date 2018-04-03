export default function gearboxModel($resource) {
  return $resource('/api/gearbox-model/:id', { id: '@_id' }, {
    update: {
      method: 'PUT',
      isArray: true,
    },
    save: {
      method: 'POST',
      isArray: true,
    },
  });
}
