import css from '../NotFoundPage/NotFoundPage.module.css';
import Icon from '../../shared/Icon/Icon';
export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <Icon className={css.icon} width="48" height="48" id="icon-sad" />
      <p>Page not found...</p>
    </div>
  );
}