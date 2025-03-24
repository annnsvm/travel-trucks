import css from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../Logo/Logo";

export default function Header() {
  const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activelink);
  };

  return (
    <header className={css.container}>
      <Logo />
      <nav className={css.nav}>
        <NavLink className={makeLinkClass} to="/" end>
          Home
        </NavLink>
        <NavLink className={makeLinkClass} to="/catalog" end>
          Catalog
        </NavLink>
        <NavLink className={makeLinkClass} to="/favorites" end>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
