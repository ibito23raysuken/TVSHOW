import axios from "axios";
import { BASE_URL, API_KEY } from "../config ";

export class TVshowAPI {
  static async fetchPopular() {
    const reponse = await axios.get(`${BASE_URL}/movie/popular/?${API_KEY}`);
    //console.log("***", reponse.data.results);
    return reponse.data.results;
  }
  static async fetchrecomendation(tvshowID) {
    const reponse2 = await axios.get(
      `${BASE_URL}/movie/${tvshowID}/recommendations?${API_KEY}`
    );
    return reponse2.data.results;
  }
  static async fetchByTitle(moviesearch) {
    const reponse = await axios.get(
      `${BASE_URL}/search/movie?query=${moviesearch}&${API_KEY}`
    );
    return reponse.data.results;
  }
}

//`linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55),
//url("${BACKGROUND_URL}${currentTVShow.backdrop_path}") no-repeat center / cover)`;
//for anime&with_genres=16&with_keywords=210024|287501
