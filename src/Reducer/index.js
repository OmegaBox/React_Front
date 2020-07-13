import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { bookingReducer, bookingSaga } from "../Reducer/bookingReducer";
import { movieReducer } from "../Reducer/movieReducer";
import { userInfoReducer, userInfoSaga } from "../Reducer/userInfoReducer";
import seatReducer, { seatSaga } from "../Reducer/bookingSeatReducer";
import modalReducer from "../Reducer/modalReducer";

const rootReducer = combineReducers({
  Booking: bookingReducer,
  Movie: movieReducer,
  userInfo: userInfoReducer,
  Seat: seatReducer,
  modal: modalReducer,
});

function* rootSaga() {
  yield all([bookingSaga(), userInfoSaga(), seatSaga()]);
}

export { rootReducer, rootSaga };
