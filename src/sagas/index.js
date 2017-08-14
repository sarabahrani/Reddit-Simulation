/* Saga :is responsible for handling side effects such as communicating with server, call an API  */
import { put, takeLatest } from 'redux-saga/effects';
const url = "https://www.reddit.com/r/reactjs.json";
function reqReddits(url) {
    return fetch(url, {
        method: "get",
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'contentType': 'application/json',
            'request-mode': 'no-cors',
        }
    }
    ).then(response => response.json());
}

function* fetchReddits() {
    try {
        //yield until the URL has been fetched
        let reddits = yield reqReddits(url);
        reddits = reddits.data.children;
        // PUT: takes an action as arg
        yield put({ type: 'FETCH_REDDITS_SUCCEED', reddits }); 
    }
    catch (e) {
        yield put({ type: 'FETCH_REDDITS_FAILED', message: e.message });
    }
}
/*
 Genertor Function : are kind of function to handle itiration.
Every GF retrun an object with two propertie: Value and Done. While the value is there, done is false. In case of value bacome undifined,
done bacome true and the itiration stop.
They can be exited and latter re-entered by Yield keyword.
*********
Yield: make the GF pause and resume.
*********
next(): every GF has a next() function that ittirate on the function

function* v() {
    let index = 0;
    while (index <= 2)
      yield ++index;
  }
const foo=v();
console.log(foo.next()); //1 done:f
console.log(foo.next()); //2 done:f
console.log(foo.next()); //undifined done: t
*/
function* sgRequest() {
    //takeLatest the last version of request. If a proccess is running or pending, it is finished and this will be run. Do not allow concurrent fetches.
    //Ex: when the user click multi time, it canceled all the pervious one and just run the latest one.
    //takeEvery: Allows concurrent fetches.
    //Param1: when this type of action raised, the function will be run
    yield takeLatest('FETCH_REDDITS', fetchReddits);
}

export default sgRequest;
