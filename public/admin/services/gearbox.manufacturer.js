export default function gearboxManufacturer($resource) {
  return $resource('/api/gearbox-manufacturer/:id', { id: '@_id' });
}