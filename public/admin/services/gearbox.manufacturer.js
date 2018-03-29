export default function gearboxManufacturer($resource) {
  return $resource('/api/gearbox-manufacturer/:id', { id: '@_id' }, {
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
