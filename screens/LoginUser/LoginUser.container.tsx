import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert } from 'react-native';
import { User } from '../../../models/User/User';
import { WrapperStackParamList } from '../../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import { useLoginMutation } from '../../../store/api/authApi';
import { setUserLoggedIn } from '../../../store/features/global/globalSlice';
import {
  setLoaderInvisible,
  setLoaderVisible
} from '../../../store/features/loader/loaderSlice';
import { useAppDispatch } from '../../../store/hooks';
import {
  HOME_SCREEN,
  LOGIN_USER_SCREEN,
  REGISTER_USER_SCREEN
} from '../../../utils/screenNames';
import { setAccessToken } from '../../../utils/storage';
import LoginScreen from './LoginUser';

interface loginUserContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof LOGIN_USER_SCREEN
  > {}

const LoginUserContainer: React.FC<loginUserContainerProps> = ({
  navigation
}) => {
  const dispatch = useAppDispatch();
  const [loginApi, { isLoading, isError, isSuccess }] = useLoginMutation();

  const handleLogin = async (values: User) => {
    dispatch(setLoaderVisible());
    try {
      const response = await loginApi(values).unwrap();
      console.log('handleLogin response', response.token);
      setAccessToken(response.token.toString());
      if (!response) {
        throw new Error('Invalid token');
      }
      dispatch(setUserLoggedIn({ isUserLoggedIn: true }));
      navigation.navigate(HOME_SCREEN);
      Alert.alert('Success', 'You have logged in successfully!');
    } catch (error) {
      Alert.alert(
        'Error',
        'Login failed. Please check your credentials and try again.'
      );
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const handleSignUp = () => {
    navigation.navigate(REGISTER_USER_SCREEN);
  };
  return <LoginScreen handleSignUp={handleSignUp} handleLogin={handleLogin} />;
};

export default LoginUserContainer;
