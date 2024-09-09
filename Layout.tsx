import React from 'react';
import CustomLoader from './components/CustomLoader/CustomLoader';
import Overlay from './components/Overlay/Overlay';
import Navigation from './navigation/NavigationContainer';
import { SelectLoader } from './store/features/loader/loaderSlice';
import { useAppSelector } from './store/hooks';

const Layout = (): JSX.Element => {
  const loader = useAppSelector(SelectLoader);
  return (
    <>
      {loader.isVisible && (
        <>
          <Overlay />
          <CustomLoader />
        </>
      )}
      <Navigation />
    </>
  );
};

export default Layout;
