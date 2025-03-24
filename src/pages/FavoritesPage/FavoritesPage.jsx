import { useSelector } from 'react-redux';
import TruckList from '../../components/TruckList/TruckList';
import { selectFavoritesTrucks } from '../../redux/trucks/selectors';
import css from '../FavoritesPage/FavoritesPage.module.css';

export default function FavoritesPage() {
  const favoriteTrucks = useSelector(selectFavoritesTrucks);
  return (
    <div className={css.container}>
      {favoriteTrucks.length === 0 && (
        <p className={css.text}>Pick your favorites trucks</p>
      )}
      <TruckList trucks={favoriteTrucks} />
    </div>
  );
}