import s from "./style.module.css";
import { SMALL_BACKGROUND_URL } from "../../config ";
export function MovieListItem({ MovieShow, onclickMovie }) {
  return (
    <div className={s.container} onClick={() => onclickMovie(MovieShow)}>
      <img
        src={SMALL_BACKGROUND_URL + MovieShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>{MovieShow.title}</div>
    </div>
  );
}
