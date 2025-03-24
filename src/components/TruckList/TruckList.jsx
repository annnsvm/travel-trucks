import TruckCard from '../TruckCard/TruckCard';
import css from '../TruckList/TruckList.module.css';

export default function TruckList({ trucks }) {
  return (
    <ul className={css.list}>
      {trucks.map(
        ({
          id,
          name,
          price,
          description,
          gallery,
          location,
          rating,
          reviews,
          transmission,
          engine,
          kitchen,
          AC,
          water,
          TV,
          bathroom,
          gas,
        }) => {
          return (
            <li key={id}>
              <TruckCard
                name={name}
                price={price}
                description={description}
                gallery={gallery[0].original}
                location={location}
                rating={rating}
                reviews={reviews.length}
                transmission={transmission}
                engine={engine}
                kitchen={kitchen}
                AC={AC}
                water={water}
                TV={TV}
                bathroom={bathroom}
                gas={gas}
                id={id}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}