const _axios = require("axios");
const axiosRetry = require("axios-retry");
const axios = _axios.create();
let IP = null;

const  GetIp = async () => {
  if(IP === null){
    const response = await fetch('https://geolocation-db.com/json/', {method: "GET", mode: 'cors'}).then((r) => (r.json())).catch((e) => (e.json));
    IP = response.IPv4;
  }
  return IP;
}



const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};
axiosRetry(axios, {
  retries: 3,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});


(async () => {
  axios.defaults.baseURL = "http://77.122.140.19/";
  axios.defaults.headers.post['User_IP'] = await GetIp();
})();

export default axios;
