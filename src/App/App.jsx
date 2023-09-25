import { useEffect, useState } from "react";
import { TVshowAPI } from "../api/tv-show";
import s from "./style.module.css";
import { BACKGROUND_URL } from "../config ";
import { TVShowDetail } from "../components/TVShowdetail/TVShowDetail";
import { Logo } from "../components/logo/logo";
import imglogo from "../assets/images/logo.png";
import { MovieList } from "../components/MovieList/MovieList";
import { Searchbar } from "../components/Searbar/Searchbar";

export function App() {
  const [allMovie, setAllMovie] = useState();
  const [recomendationList, setRecomendationList] = useState();
  const [currentTVShow, setcurrentTVShow] = useState();
  async function fetchPopulars() {
    const popular = await TVshowAPI.fetchPopular();
    if (popular.length > 0) {
      setcurrentTVShow(popular[0]);
      setAllMovie(popular);
    }
  }
  async function fetchrecomendation(tvshowID) {
    const recomendation = await TVshowAPI.fetchrecomendation(tvshowID);
    if (recomendation.length > 0) {
      setRecomendationList(recomendation.slice(0, 10));
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);
  useEffect(() => {
    if (currentTVShow) {
      fetchrecomendation(currentTVShow.id);
    }
  }, [currentTVShow]);
  async function searchfunction(Moviesearch) {
    console.log("****", Moviesearch);
    const reponseMoviesearch = await TVshowAPI.fetchByTitle(Moviesearch);
    if (reponseMoviesearch.length > 0) {
      setcurrentTVShow(reponseMoviesearch[0]);
    }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKGROUND_URL}${currentTVShow.backdrop_path}") no-repeat center/cover`
          : `black`,
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>
              <Logo
                image={imglogo}
                title={"YOKU-SAMA MOVIE NEWS"}
                subtitle={"Find movie to Watch"}
              />{" "}
            </div>
            <div>Subtittle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <Searchbar onSubmit={searchfunction} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail currentTVShow={currentTVShow} />}
      </div>
      <div>
        {recomendationList && (
          <MovieList
            onclickItem={setcurrentTVShow}
            MovieShowList={recomendationList}
          />
        )}
      </div>
    </div>
  );
}
