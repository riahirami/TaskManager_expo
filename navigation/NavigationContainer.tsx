import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../store/hooks';
import OnBoardingStackNavigation from './OnBoardingStackNavigation/OnBoardingStackNavigation';
import { navigationRef } from './RootNavigation';
import WrapperStackNavigation from './WrapperStackNavigation/WrapperStackNavigation';

function Navigation(): JSX.Element {
  const isUserLoggedIn = useAppSelector((state) => state.global.isUserLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      {isUserLoggedIn ? (
        <WrapperStackNavigation />
      ) : (
        <OnBoardingStackNavigation />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
