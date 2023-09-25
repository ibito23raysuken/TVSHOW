import s from "./style.module.css";
import { MovieListItem } from "../MovieListItem/MovieListItem";
export function MovieList({ MovieShowList, onclickItem }) {
  return (
    <>
      <div className={s.title}>You can like this</div>
      <div className={s.recommendation}>
        {MovieShowList.map((Movieinfo) => {
          return (
            <span key={Movieinfo.id}>
              <MovieListItem MovieShow={Movieinfo} onclickMovie={onclickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
