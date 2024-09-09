import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUserContainer from '../../components/screens/LoginUser/LoginUser.container';
import RegisterUserContainer from '../../components/screens/RegisterUser/RegisterUser.container';
import { HOME_SCREEN, LOGIN_USER_SCREEN, REGISTER_USER_SCREEN } from '../../utils/screenNames';

export type OnBoardingStackParamList = {
  [HOME_SCREEN]: undefined;
  [LOGIN_USER_SCREEN]: undefined;
  [REGISTER_USER_SCREEN]: undefined;
};

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

const OnBoardingStackNavigation = (): JSX.Element => (
    <OnBoardingStack.Navigator
    screenOptions={{ headerShown: false}}>
      <OnBoardingStack.Screen name={LOGIN_USER_SCREEN} component={LoginUserContainer} />
      <OnBoardingStack.Screen name={REGISTER_USER_SCREEN} component={RegisterUserContainer} />
    
  </OnBoardingStack.Navigator>
);

export default OnBoardingStackNavigation;
