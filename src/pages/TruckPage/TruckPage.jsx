import { useSelector } from 'react-redux';
import TruckCharacters from '../../components/TruckCharacters/TruckCharacters';
import TruckInfo from '../../components/TruckInfo/TruckInfo';
import TrucksGallery from '../../components/TrucksGallery/TrucksGallery';
import css from '../TruckPage/TruckPage.module.css';
import { selectLoader } from '../../redux/trucks/selectors';
// import Loader from '../../shared/Loader/Loader';

export default function TruckPage() {
  const loading = useSelector(selectLoader);
  return (
    <div className={css.container}>
      {/* {loading && <Loader />} */}
      <TruckInfo />
      <TrucksGallery />
      {!loading && <TruckCharacters />}
    </div>
  );
}