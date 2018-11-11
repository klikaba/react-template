import axios from 'axios';

const accessToken = '';

const Api = {
  service: axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // csrf: 'token',
    },
  }),

  get(endpoint, params = {}) {
    return this.service.get(endpoint, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response);
  },

  post(endpoint, payload, params = {}) {
    return this.service.post(endpoint, payload, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response);
  },

  patch(endpoint, payload, params = {}) {
    return this.service.patch(endpoint, payload, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response);
  },

  put(endpoint, payload, params = {}) {
    return this.service.put(endpoint, payload, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response);
  },

  delete(endpoint, params = {}) {
    return this.service.delete(endpoint, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response);
  },
};

export default Api;

// class Api {
//   constructor() {
//     let service = axios.create({
//       headers: {csrf: 'token'}
//     });
//     service.interceptors.response.use(this.handleSuccess, this.handleError);
//     this.service = service;
//   }

//   handleSuccess(response) {
//     return response;
//   }

//   handleError = (error) => {
//     switch (error.response.status) {
//       case 401:
//         this.redirectTo(document, '/')
//         break;
//       case 404:
//         this.redirectTo(document, '/404')
//         break;
//       default:
//         this.redirectTo(document, '/500')
//         break;
//     }
//     return Promise.reject(error)
//   }

//   redirectTo = (document, path) => {
//     document.location = path
//   }
  
//   get(path, callback) {
//     return this.service.get(path).then(
//       (response) => callback(response.status, response.data)
//     );
//   }

//   patch(path, payload, callback) {
//     return this.service.request({
//       method: 'PATCH',
//       url: path,
//       responseType: 'json',
//       data: payload
//     }).then((response) => callback(response.status, response.data));
//   }

//   post(path, payload, callback) {
//     return this.service.request({
//       method: 'POST',
//       url: path,
//       responseType: 'json',
//       data: payload
//     }).then((response) => callback(response.status, response.data));
//   }
// }

// export default new Service;