import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const clientId = process.env.APP_CLIENT_ID;
const clientSecret = process.env.APP_CLIENT_SECRET;

export default {
  token(payload) {
    return axios.post(`${baseURL}/oauth/token?grant_type=password`, {
      ...payload,
      client_id: clientId,
      client_secret: clientSecret,
    }, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(json => json);
  },
};
