import { put, takeLatest } from 'redux-saga/effects';
function* fetchEvents() {
    try {

        yield put({ type: 'FETCH_EVENTS_SUCCEED', events: {} });

    } catch (e) {
        yield put({ type: 'FETCH_EVENTS_FAILED', message: e.message });
    }
}

function* sgRequest() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
}
export default sgRequest;
