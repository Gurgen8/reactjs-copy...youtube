import { all, fork } from 'redux-saga/effects'
import music from './music';

export default function* watchers() {
  yield all([
    music,
  ].map(fork))
}
