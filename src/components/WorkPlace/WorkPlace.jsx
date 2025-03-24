import TruckList from "../TruckList/TruckList";
import { getAllTrucks } from "../../redux/trucks/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllTrucks,
  selectCurrentPage,
  selectDisplayedTrucks,
  selectEmptyFilter,
  selectFilteredTrucks,
  selectItemsPerPage,
  selectLoader,
} from "../../redux/trucks/selectors";
import { loadMoreTrucks } from "../../redux/trucks/slice";
import css from "../WorkPlace/WorkPlace.module.css";
// import Loader from '../../shared/Loader/Loader';
import Icon from "../../shared/Icon/Icon";

export default function WorkPlace({ isOpen, openSidebar }) {
  const dispatch = useDispatch();
  const trucks = useSelector(selectAllTrucks);
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const displayedTrucks = useSelector(selectDisplayedTrucks);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const emptyFilter = useSelector(selectEmptyFilter);
  const loading = useSelector(selectLoader);
  const sourceTrucks = filteredTrucks.length > 0 ? filteredTrucks : trucks;

  useEffect(() => {
    dispatch(getAllTrucks());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreTrucks());
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      {!loading && (
        <div className={css.container}>
          <button className={css.filterBtn} type="button" onClick={openSidebar}>
            {isOpen ? (
              <Icon
                className={css.icon}
                width="20"
                height="20"
                id="icon-cancel-circle"
              />
            ) : (
              <Icon
                className={css.icon}
                width="16"
                height="16"
                id="icon-filter"
              />
            )}
          </button>
          <TruckList trucks={displayedTrucks} />
          {emptyFilter ? (
            <p className={css.text}>
              Sorry, the positions you selected are unfortunately taken...
            </p>
          ) : (
            currentPage * itemsPerPage < sourceTrucks.length && (
              <button className={css.btn} onClick={handleLoadMore}>
                Load more
              </button>
            )
          )}
        </div>
      )}
    </>
  );
}
