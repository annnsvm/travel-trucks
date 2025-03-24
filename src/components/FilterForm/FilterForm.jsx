import { Formik, Field, Form } from "formik";
import Button from "../../shared/Button/Button";
import Icon from "../../shared/Icon/Icon";
import { cities } from "../../helpers/citiesList";
import { equipment } from "../../helpers/equipmentArray";
import clsx from "clsx";
import css from "../FilterForm/FilterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/trucks/slice";
import { selectAllTrucks } from "../../redux/trucks/selectors";

export default function FilterForm({ closeSidebar }) {
  const initialValues = { location: "" };
  const dispatch = useDispatch();
  const trucks = useSelector(selectAllTrucks);

  const handleSubmit = (values) => {
    const filteredValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== false && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    const filteredTrucks = trucks.filter((truck) =>
      Object.entries(filteredValues).every(
        ([key, value]) => truck[key] === value
      )
    );

    dispatch(changeFilter(filteredTrucks));

    closeSidebar();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.form}>
          <datalist id="city-options">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
          <label className={css.locationLabel}>
            Location
            <Field
              className={css.locationInput}
              name="location"
              placeholder="Kyiv, Ukraine"
              list="city-options"
            />
            <Icon
              className={css.iconLocation}
              width="20"
              height="20"
              id="icon-location"
            />
          </label>

          <div className={css.equipmentContainer}>
            <p className={css.text}>Filters</p>
            <p className={css.textBold}>Vehicle equipment</p>
            <hr className={css.string} />
            <ul className={css.equipmentList}>
              {equipment.map((item) => (
                <li key={item.title}>
                  <label
                    className={clsx(
                      css.box,
                      values[item.title] && css.activeBox
                    )}
                  >
                    <Field
                      className={css.checkbox}
                      type="checkbox"
                      id={item.title}
                      name={item.title}
                    />
                    <Icon
                      className={css.iconVcehicle}
                      width="32"
                      height="32"
                      id={item.icon}
                    />
                    <p>
                      {item.title.toUpperCase().slice(0, 1) +
                        item.title.slice(1)}
                    </p>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <p className={css.textBold}>Vehicle type</p>
          <hr className={css.string} />
          <div className={css.typeContainer}>
            <label
              className={clsx(
                css.box,
                values.form === "panelTruck" && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="radio"
                name="form"
                value="panelTruck"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="icon-van"
              />

              <div>
                <p>Van</p>
              </div>
            </label>
            <label
              className={clsx(
                css.box,
                values.form === "fullyIntegrated" && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="radio"
                name="form"
                value="fullyIntegrated"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="icon-full"
              />
              <div>
                <p className={css.fueltext}>Fully Integrated</p>
              </div>
            </label>
            <label
              className={clsx(
                css.box,
                values.form === "alcove" && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="radio"
                name="form"
                value="alcove"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="icon-alcove"
              />
              <div>
                <p>Alcove</p>
              </div>
            </label>
          </div>
          <Button text="Search" />
        </Form>
      )}
    </Formik>
  );
}
