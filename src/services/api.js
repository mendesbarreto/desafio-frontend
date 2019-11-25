import axios from 'axios';
import qs from 'querystring';

import { client_id, client_secret } from './credentials';

let token =
  'o3NWD82cvl3QZ8vMzIcj1uDyR4zIwzVuTUp8CwbcMTR22sgxfZOk6cHYE2KQ5WgZ.LHaae8H9N5EVIDnu0.B.oM1Not4XayPl_OYlglXAVqnPAcnuXGK5KNlQ4ZO4CQsYa7_nzMTSy_y1zq0BMhizB3vMDB6ze0b.4FJ0CVt4aRLja2xHeUgZja.Q4HDjmBPfMRliN.AuGTTOQsFlpT9cQRVKn46zqlK.aSs6VA.nVCcIbu5Lf2QjuzL4Qybzv1cv7oob3sBJrHVxV8wpEjoT2NMfUcSOHb4ikDnKy1DgX1Id5Hiyuv4imq3xxDxML6rR0oIIDkrgY_WCdH2efq6yvUbeyHET_2nbTGvJwCvmoaRQ4NZ6ZHBAbY6.RzyGvO4YQLrAOq8WYZgsNe0UrtVjFIVMBy5oC5YXSfWZ9fRbW2xyyn0yd7dEPFV_XUEH310dVGi91zmSCOT2S.vGpKE3HaiA5dCgOtAsWm0ot4uvTvh73SVxUrzm9gXI_4wY1QMxZQeUJ3eZtXJnrLfcsVYAHYr7D1W7RhUp_Zeri5NqHCiHZz3_jAjuSYuUKfuc53C7NpbE5B0bkNt8rS56PA0GepvI9eq4z28UWrj2JLXGkJLBNqEm9iIBjPjf5lCE1PxLG96rBNx4lf262p37q3XBKedCjG7CSNOgkKNaWPOC6AnFVMAfn9HdvYLHcpqTIhQb_nfK5zgwrSRMCDZN4UP2jirKidCHFLGEIbeo4n4gRnf2dSE6ypvDa24wgSJwMS.fBK9YRvS.u.Hsd6eppFpnnP5FOSu3lgLAR7fbvhEa5HWFZfbU3gffGdQDbG6m4r0NPKq9GX8UkaBwLJkrCEYBod_Xb05_ge5II8qWOiEKvRYiVZHGvrcu73PSfjLJpJklj4mLt3QNvHqMbJgToaZ7niwhyX8JbaVFNzg0Uwgctou09f2P7t74QDfQeZJbXLCD1GToB9v7oANvzGWiUlDNXC1JD6Y3E7aUuWJrZlFrGOfVqOH9hA5jh1R2WMTQx03lFI0t0xTgQVm8lQ.iOhV84eocNuZJ9XyvWJIPNX48hgPJKrFoIwMPGCZYYQGJy8_XY69.tMQpGj_9H49v5qxzEoJ0Q--';
const refresh_token =
  'AM362l3RqYA5ulDTJkfP37EvMvibt08jfve7xaC0M4ukM_x2CPO0ypfH5kw.BHaoPDE-';

const authorization = `Basic ${Buffer(`${client_id}:${client_secret}`).toString(
  'base64'
)}`;

const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://weather-ydn-yql.media.yahoo.com`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  mode: 'no-cors',
});

const refreshToken = async () => {
  const response = await axios.post(
    'https://cors-anywhere.herokuapp.com/https://api.login.yahoo.com/oauth2/get_token',
    qs.stringify({
      client_id,
      client_secret,
      redirect_uri: 'oob',
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: authorization,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors',
    }
  );

  token = await response.data.access_token;
  return `Bearer ${token}`;
};

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const errorResponse = error.response;

    if (errorResponse.status === 401) {
      const bearer = await refreshToken();
      const newRequest = error.config;
      api.defaults.headers.Authorization = bearer;
      newRequest.headers.Authorization = bearer;
      return axios.request(newRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
