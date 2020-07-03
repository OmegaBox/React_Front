import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectMovie } from "../../Reducer/bookingReducer";

import { movieApi } from "../../Api/api";

import "./style/BookingMovieList.scss";

const BookingMovieList = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(
    (state) => state.Booking.selectedOption.selectedMovies
  );
  const unSelectedMovies = new Array(3 - selectedMovies.length).fill(0);

  const movies = useSelector((state) => state.Booking.movies); // 호영이가 상태 만들면 교체해야 함

  return (
    <div className="bookingMovieList">
      <h3>영화</h3>
      <ul className="movieLists">
        {movies.map((movie) => {
          let iconClassName = "icon";
          switch (movie.grade) {
            case "청소년관람불가":
              iconClassName += " ageGrade19Small";
              break;
            case "15세이상관람가":
              iconClassName += " ageGrade15Small";
              break;
            case "12세이상관람가":
              iconClassName += " ageGrade12Small";
              break;
            case "전체관람가":
            default:
              iconClassName += " ageGradeSmall";
              break;
          }

          let selectedClassName = "";
          selectedClassName += selectedMovies.find(
            (selectedMovie) => selectedMovie.title === movie.name_kor
          )
            ? "selectedInfoDarker"
            : "";

          return (
            <li className={selectedClassName}>
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    selectMovie({ title: movie.name_kor, poster: movie.poster })
                  )
                }
              >
                <span className={iconClassName} />
                <span>{movie.name_kor}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="selectedMoviePosterBox">
        <ul>
          {unSelectedMovies.length !== 3 ? (
            <>
              {selectedMovies.map((movie) => {
                return (
                  <li>
                    <img
                      className="poster"
                      src={movie.poster}
                      alt={movie.title}
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          selectMovie({
                            title: movie.title,
                            poster: movie.poster,
                          })
                        )
                      }
                    />
                  </li>
                );
              })}
              {unSelectedMovies.map(() => {
                return <li>+</li>;
              })}
            </>
          ) : (
            <div className="emptySeletedList">
              <span>모든영화</span>
              <span>목록에서 영화를 선택하세요.</span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(BookingMovieList);
