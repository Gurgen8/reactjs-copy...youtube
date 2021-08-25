import { takeLatest, put, call } from 'redux-saga/effects'
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

import Api from "../../Api";


export default function* watcher() {

  yield takeLatest(GET_TOP_MUSIC_REQUEST, handleGetTopMusic);
  yield takeLatest(GET_SINGLE_MUSIC_REQUEST, handleGetSingleMusic);
   yield takeLatest(GET_SEARCH_MUSIC_REQUEST, handleGetSearcheMusic);

}

function* handleGetTopMusic(action) {
  try {
    const { params } = action.payload;
    const { data } = yield call(Api.getTopMusics, params);
    yield put({
      type: GET_TOP_MUSIC_SUCCESS,
      payload: {
        data,
      }
    })
  } catch (e) {
    console.warn(e);
    yield put({
      type: GET_TOP_MUSIC_FAIL,
      message: e.message,
      payload: {
        data: e.response?.data
      }
    })
  }
}

function* handleGetSingleMusic(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(Api.getSingleMusics, id);
    yield put({
      type: GET_SINGLE_MUSIC_SUCCESS,
      payload: {
        data,
      }
    })
  } catch (e) {
    console.warn(e);
    yield put({
      type: GET_SINGLE_MUSIC_FAIL,
      message: e.message,
      payload: {
        data: e.response?.data
      }
    })
  }
}


function* handleGetSearcheMusic(action){
  try {
    const {params}= action.payload
    const{q}=action.payload
    const { data } = yield call(Api.getSearchMusic, params);
      yield put({
      type: GET_SEARCH_MUSIC_SUCCESS,
      payload: {
        data,
      }
    })
    
  } catch (e) {
      console.warn(e);
     yield put({
      type: GET_SEARCH_MUSIC_FAIL,
      message: e.message,
      payload: {
        data: e.response?.data
      }
    })
    
  }

}