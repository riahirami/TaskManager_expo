import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import { icons } from '../../utils/icons';
import { styles } from './loginUserStyle';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginScreenProps = {
  handleSignUp: () => void;
  handleLogin: (values: { username: string; password: string }) => void;
};

const LoginScreen: React.FC<LoginScreenProps> = ({
  handleLogin,
  handleSignUp
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.LOGO}
        alt="logo"
        width={30}
        height={30}
        style={styles.logoCynoia}
      />

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <View style={styles.buttonContainer}>
              <CustomButton title="Login" onPress={() => handleSubmit()} />
              <View style={styles.signUpContainer}>
                <Text>Don't have an account ?</Text>
                <CustomButton title="SignUp" onPress={() => handleSignUp()} />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
