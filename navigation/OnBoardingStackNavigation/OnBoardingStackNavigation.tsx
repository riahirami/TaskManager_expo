import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  LOGIN_USER_SCREEN,
  REGISTER_USER_SCREEN
} from '../../utils/screenNames';
import LoginUserContainer from '../../screens/LoginUser/LoginUser.container';
import RegisterUserContainer from '../../screens/RegisterUser/RegisterUser.container';

export type OnBoardingStackParamList = {
  [HOME_SCREEN]: undefined;
  [LOGIN_USER_SCREEN]: undefined;
  [REGISTER_USER_SCREEN]: undefined;
};

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

const OnBoardingStackNavigation = (): JSX.Element => (
  <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
    <OnBoardingStack.Screen
      name={LOGIN_USER_SCREEN}
      component={LoginUserContainer}
    />
    <OnBoardingStack.Screen
      name={REGISTER_USER_SCREEN}
      component={RegisterUserContainer}
    />
  </OnBoardingStack.Navigator>
);

export default OnBoardingStackNavigation;
