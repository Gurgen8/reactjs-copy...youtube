export const GET_TOP_MUSIC_REQUEST = 'GET_TOP_MUSIC_REQUEST';
export const GET_TOP_MUSIC_SUCCESS = 'GET_TOP_MUSIC_SUCCESS';
export const GET_TOP_MUSIC_FAIL = 'GET_TOP_MUSIC_FAIL';

export function getTopMusicRequest(params = {}) {
  return {
    type: GET_TOP_MUSIC_REQUEST,
    payload: {
      params,
    }
  }
}


export const GET_SINGLE_MUSIC_REQUEST = 'GET_SINGLE_MUSIC_REQUEST';
export const GET_SINGLE_MUSIC_SUCCESS = 'GET_SINGLE_MUSIC_SUCCESS';
export const GET_SINGLE_MUSIC_FAIL = 'GET_SINGLE_MUSIC_FAIL';

export function getSingleMusicRequest(id) {
  return {
    type: GET_SINGLE_MUSIC_REQUEST,
    payload: {
      id,
    }
  }
}


export const GET_SEARCH_MUSIC_REQUEST = 'GET_SEARCH_MUSIC_REQUEST';
export const GET_SEARCH_MUSIC_SUCCESS = 'GET_SEARCH_MUSIC_SUCCESS';
export const GET_SEARCH_MUSIC_FAIL = 'GET_SEARCH_MUSIC_FAIL';

export function getSearchMusicRequest(params={}) {
  return {
    type: GET_SEARCH_MUSIC_REQUEST,
    payload: {
      params,
      
    }
  }
}
