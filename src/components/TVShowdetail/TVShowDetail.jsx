import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";
export function TVShowDetail({ currentTVShow }) {
  const note = currentTVShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{currentTVShow.original_title}</div>
      <div className={s.rating_style}>
        <FiveStarRating note={note} />
        <div className={s.vote}>{note}</div>
      </div>

      <div className={s.overview}>{currentTVShow.overview}</div>
    </div>
  );
}
