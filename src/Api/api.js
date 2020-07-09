import axios from "axios";
import { transformDateFormat } from "../Utils/ultil";

export const movieApi = {
  getMovies: (id) => axios.get("movies/"),
  getSchedules: ({ date, movies, theaterId }) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    if (date) date = transformDateFormat(date).dateStringNoDash;

    if (date && theaterId && !movies) {
      console.log(`theaters/${theaterId}/schedules/${date}`);

      return axios.get(`theaters/${theaterId}/schedules/${date}`);
    } else {
      console.log(
        `theaters/${theaterId}/schedules/${date}/?movies=${movieIds}`
      );
      return axios.get(
        `theaters/${theaterId}/schedules/${date}/?movies=${movieIds}`
      );
    }
  },
  getScreeningRegions: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    const call = `theaters/schedules/regions/${date}/${
      movies ? "?movies=" + movieIds : ""
    }
    `;

    console.log(call);

    return axios.get(call);
  },
  getScreeningTheaters: (date, movies) => {
    let movieIds = "";
    if (movies) {
      movieIds = movies.reduce((acc, cur) => acc + "+" + cur.id, "").slice(1);
    }

    const call = `theaters/schedules/${date}/${
      movies ? "?movies=" + movieIds : ""
    }
    `;

    console.log(call);

    return axios.get(call);
  },
  getSeats: (scheduleId) => {
    return axios.get(`/schedules/${scheduleId}/seats/`);
  },
};

export const userApi = {
  signup: ({ name, id, pw, pwCheck, birth, tell, email }) => {
    return axios.post("/members/signup/", {
      username: id,
      email: email,
      password1: pw,
      password2: pwCheck,
      name: name,
      mobile: tell,
      birth_date: birth,
    });
  },
};
