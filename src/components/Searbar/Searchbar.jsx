import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function Searchbar({ onSubmit }) {
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim != "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon}></SearchIcon>
      <input
        onKeyDown={submit}
        placeholder="Search you favorite Movie"
        className={s.input}
        style={{ width: "100%" }}
        type="text"
      />
    </>
  );
}
