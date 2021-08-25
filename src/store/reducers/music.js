import {
  GET_SINGLE_MUSIC_FAIL,
  GET_SINGLE_MUSIC_REQUEST,
  GET_SINGLE_MUSIC_SUCCESS,
  GET_TOP_MUSIC_FAIL,
  GET_TOP_MUSIC_REQUEST,
  GET_TOP_MUSIC_SUCCESS,
  GET_SEARCH_MUSIC_REQUEST,
  GET_SEARCH_MUSIC_SUCCESS,
  GET_SEARCH_MUSIC_FAIL,
} from "../actions/music";

const initialState = {
  topMusicStatus: '',
  topMusicList: [],
  topMusicInfo: {},
  singleMusic: {},
  singleMusicStatus: '',
  searchMusic:[],
  searchMusicStatus:''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_MUSIC_REQUEST: {
      return {
        ...state,
        topMusicStatus: 'request',
      }
    }
    case GET_TOP_MUSIC_FAIL: {
      return {
        ...state,
        topMusicStatus: 'fail',
      }
    }
    case GET_TOP_MUSIC_SUCCESS: {
      const { items, ...info } = action.payload.data;
      return {
        ...state,
        topMusicList: items,
        topMusicInfo: info,
        topMusicStatus: 'ok',
      }
    }
    case GET_SINGLE_MUSIC_REQUEST:{
      return {
        ...state,
        singleMusicStatus: 'request',
      }
    }
    case GET_SINGLE_MUSIC_FAIL:{
      return {
        ...state,
        singleMusicStatus: 'fail',
      }
    }
    case GET_SINGLE_MUSIC_SUCCESS: {
      const { data } = action.payload;
      
      return {
        ...state,
        singleMusicStatus: 'ok',
        singleMusic: data.items[0]
      }
    }
    case GET_SEARCH_MUSIC_REQUEST:{
      return {
        ...state,
       searchMusicStatus: 'request',
      }
    }
    case GET_SEARCH_MUSIC_FAIL:{
      return {
        ...state,
       searchMusicStatus: 'fail',
      }
    }
    case GET_SEARCH_MUSIC_SUCCESS: {
     const { items, ...info } = action.payload.data;

     console.log(111,items,info)
      return {
        ...state,
        searchMusicList: items,
        searchMusicInfo: info,
        searchMusicStatus: 'ok',
      }
    }
    default: {
      return state
    }
  }
}
