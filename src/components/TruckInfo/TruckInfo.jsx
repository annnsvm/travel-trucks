import { selectTruck } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from '../TruckInfo/TruckInfo.module.css';
import Icon from '../../shared/Icon/Icon';
import { useEffect } from 'react';
import { getTruck } from '../../redux/trucks/operations';
import { useParams } from 'react-router';

export default function TruckInfo() {
  const dispatch = useDispatch();
  const id = useParams();
  const truck = useSelector(selectTruck);

  useEffect(() => {
    dispatch(getTruck(id.id));
  }, [dispatch, id]);

  return (
    truck && (
      <section className={css.titleContainer}>
        <h1 className={css.title}>{truck.name}</h1>
        <div className={css.ratingContainer}>
          <div className={css.rating}>
            <Icon width="16" height="16" id="icon-Rating" />
            <p>
              {truck.rating} ({truck.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <Icon width="16" height="16" id="icon-map" />
            <p>{truck.location}</p>
          </div>
        </div>
        <p className={css.price}>€{truck.price}.00</p>
      </section>
    )
  );
}