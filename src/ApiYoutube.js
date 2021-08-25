import axios from "axios";
const KEY = "AIzaSyCU9ns2YxV8x5tDU8cMJ2-7Vyo6P9sPC94";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
      regionCode: 'ru',
      
  },
  headers: {}
});