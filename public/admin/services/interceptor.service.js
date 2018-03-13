export default function Interceptor() {
  return {
    request: function(config) {
      config.headers['Authorization'] = 'Bearer 4e5a645677616179614a6f324d56656f67736e327267615379796b4c4f6f68705862662b666558614c2b30764d6b5a6330734a712b46454a516953624c4e415a4a7170426f704f56586d76564a6479333159716645513d3d';
      return config;
    },
    requestError: function(config) {
      return config;
    },
    response: function(res) {
      return res;
    },
    responseError: function(res) {
      return res;
    }
  };
}
