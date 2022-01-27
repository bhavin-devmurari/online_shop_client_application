import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api/v1/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTg1Y2RiMjViNTI0MDU3NzVkODZiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg3MTA5NywiZXhwIjoxNjM5MTMwMjk3fQ.hw_xfwPAi4irzhe5c1a1sjR3wcx2JipeKbuviwaK3uE';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
