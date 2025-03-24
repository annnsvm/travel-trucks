import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import WorkPlace from '../../components/WorkPlace/WorkPlace';
import css from '../CataloguePage/CataloguePage.module.css';
import { useDispatch } from 'react-redux';
import { resetTruck } from '../../redux/trucks/slice';

export default function CataloguePage() {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    dispatch(resetTruck());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <WorkPlace isOpen={isSidebarOpen} openSidebar={openSidebar} />
    </div>
  );
}