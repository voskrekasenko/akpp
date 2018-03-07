export default function tableLinks($resource) {
  return $resource('/api/table-links/:gearId&:yearsId', { _gearId: '@_gearId', _yearsId: '@_yearsId' });
}
