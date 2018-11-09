import axios from 'axios';

const baseURL = process.env.API_BASE_URL;

export default {
  register(payload) {
    return axios.post(`${baseURL}/api/v1/users`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(json => json);
  },
};
