import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert } from 'react-native';
import { User } from '../../../models/User/User';
import { WrapperStackParamList } from '../../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import { useRegisterMutation } from '../../../store/api/authApi';
import {
  setLoaderInvisible,
  setLoaderVisible
} from '../../../store/features/loader/loaderSlice';
import { useAppDispatch } from '../../../store/hooks';
import {
  LOGIN_USER_SCREEN,
  REGISTER_USER_SCREEN
} from '../../../utils/screenNames';
import RegisterUser from './RegisterUser';

interface registerUserContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof REGISTER_USER_SCREEN
  > {}

const RegisterUserContainer: React.FC<registerUserContainerProps> = ({
  navigation
}) => {
  const [registerApi, { isLoading, isError, isSuccess }] =
    useRegisterMutation();

  const dispatch = useAppDispatch();

  const handleRegister = async (values: User) => {
    dispatch(setLoaderVisible());
    console.log('Attempting to register...');
    try {
      const res = await registerApi(values).unwrap();
      console.log('Registration response:', res);
      Alert.alert('Success', 'You have registered successfully!');
      navigation.navigate(LOGIN_USER_SCREEN);
    } catch (error) {
      console.error('Registration error:', error);

      Alert.alert('Error', 'Registration failed. Please try again.');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const handleSignIn = () => {
    navigation.navigate(LOGIN_USER_SCREEN);
  };

  return (
    <RegisterUser
      handleSignIn={handleSignIn}
      handleRegister={handleRegister}
      isSuccess={isSuccess}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default RegisterUserContainer;
