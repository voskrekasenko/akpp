export default function tableLinks($resource) {
  return $resource('/api/table-links/:id', { _id: '@_id' });
}
