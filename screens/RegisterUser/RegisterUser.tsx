import { Formik } from 'formik';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { icons } from '../../../utils/icons';
import CustomButton from '../../CustomButton/CustomButton';
import { styles } from './registerUserStyles';

interface RegisterValues {
  username: string;
  password: string;
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

type RegisterUserScreenProps = {
  handleRegister: (values: RegisterValues) => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  handleSignIn: () => void;
};

const RegisterUser: React.FC<RegisterUserScreenProps> = ({
  handleRegister,
  handleSignIn,
  isSuccess,
  isLoading,
  isError
}) => {
  return (
    <View style={styles.container}>
      <Image source={icons.LOGO} alt="logo" style={styles.logoCynoia} />

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <>
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
              <CustomButton title="Register" onPress={() => handleSubmit()} />
              <View style={styles.signInContainer}>
                <Text>Already have an account ?</Text>
                <CustomButton title={'Login'} onPress={handleSignIn} />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterUser;
