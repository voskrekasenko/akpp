export default function gearboxResource($resource) {
  return $resource('/api/gearbox-type/:id', { id: '@_id' });
}
