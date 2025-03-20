import css from "./LinkButton.module.css";
import { Link } from "react-router-dom";

export default function LinkButton({ route, text, width }) {
  return (
    <Link className={css.link} to={route} style={{ width: width }}>
      {text}
    </Link>
  );
}
