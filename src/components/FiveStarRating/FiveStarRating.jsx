import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ note }) {
  const StarRating = [];
  const starFillcont = Math.floor(note);
  const StarHalftest = note - starFillcont >= 0.5;
  const StarEmptycount = 5 - starFillcont - (StarHalftest ? 1 : 0);

  for (let i = 0; i < starFillcont; i++) {
    StarRating.push(<StarFill key={"starfill" + i} />);
  }
  StarRating.push(StarHalftest && <StarHalf key="StarHalf" />);
  for (let i = 0; i < StarEmptycount; i++) {
    StarRating.push(<StarEmpty key={"StarEmpty" + i} />);
  }

  return <div>{StarRating}</div>;
}
