export default function tableLinks($resource) {
  const formatFilterRequest = function (data) {
    // input looks like: {username:"imauser", pw:"password"}
    // output should be: {request: {cmd:"login", username:"imauser", pw:"password"}}
    data = 'login';
    data = {
      request: data,
    };
    data = angular.toJson(data);
    return data;
  };

  return $resource('/api/table-links/:id', { id: '@_id' }, {
    query: {
      method: 'GET',
      params: {},
      isArray: true,
      transformRequest: formatFilterRequest,
    },
    update: {
      method: 'PUT',
    },
  });
}
