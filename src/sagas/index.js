import {
  all
  // takeLatest
} from 'redux-saga/effects'

export function * rootSaga() {
  return yield all([
    // takeLatest(MentorTypes.RETRIEVE_ALL_MENTORS_REQUEST, retrieveMentorsRowsTotalOffsetSaga),
  ])
}
