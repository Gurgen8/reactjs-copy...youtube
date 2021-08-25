import axios from "axios";

const YOUTUBE_KEY = 'AIzaSyCU9ns2YxV8x5tDU8cMJ2-7Vyo6P9sPC94';

const api = axios.create({
  baseURL: false ? 'http://localhost:8080' : 'https://www.googleapis.com'
});

api.interceptors.request.use((config) => {
  config.params.key = YOUTUBE_KEY;
  return config;
}, e => Promise.reject(e))

class Api {

  static getTopMusics = (params) => {
    return api.get('/youtube/v3/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        videoCategoryId: 10,
        regionCode: 'am',
        maxResults: 5,
        ...params,
      }
    })
  }
  static getSingleMusics = (id) => {
    return api.get('/youtube/v3/videos', {
      params: {
        part: 'snippet',
        videoCategoryId: 10,
        id,
       
      }
    })
  }


  static getSearchMusic = (q = '', params) => {
    return api.get('/youtube/v3/search', {
      params: {
        part: 'snippet',
        videoCategoryId: 10,
        type: 'video',
        regionCode: 'ru',
        q,
        ...params,
      }
    })
  }
}

export default Api
