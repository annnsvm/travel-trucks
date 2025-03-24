import FilterForm from '../FilterForm/FilterForm';
import css from '../Sidebar/Sidebar.module.css';
import clsx from 'clsx';

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside className={clsx(css.container, isOpen && css.isOpen)}>
      <FilterForm closeSidebar={closeSidebar} />
    </aside>
  );
}