import Icon from '../../shared/Icon/Icon';
import css from '../OptionsItem/OptionsItem.module.css';

export default function OptionsItem({ icon, text }) {
  return (
    <li className={css.listItem}>
      <Icon className={css.icon} width="20" height="20" id={icon} />
      <p>{text}</p>
    </li>
  );
}