export default function tableLinks($resource) {
  return $resource('/api/table-links', { _id: '@_id' });
}
