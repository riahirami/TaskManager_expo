import { Formik } from 'formik';
import React from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import CustomButton from '../CustomButton/CustomButton';
import styles from './formModalStyles';

const validationSchema = () => {
  return Yup.object().shape({
    nameOrTitle: Yup.string()
      .required('Project name')
      .min(3, 'Project name must be at least 3 characters long'),
    description: Yup.string()
      .required('Description is required')
      .min(5, 'Description must be at least 5 characters long')
  });
};

interface FormModalProps {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  confirmForm: (values: { nameOrTitle: string; description: string }) => void;
}

const FormModal: React.FC<FormModalProps> = ({
  isModalVisible,
  setModalVisible,
  confirmForm
}) => {
  const initialValues = {
    nameOrTitle: '',
    description: ''
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            confirmForm({
              nameOrTitle: values.nameOrTitle,
              description: values.description
            });
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <View style={styles.modalContent}>
              <Text>Create New Project</Text>

              <TextInput
                placeholder={'Project Name'}
                onChangeText={handleChange('nameOrTitle')}
                onBlur={handleBlur('nameOrTitle')}
                value={values.nameOrTitle}
                style={styles.input}
              />
              {touched.nameOrTitle && errors.nameOrTitle && (
                <Text style={styles.errorText}>{errors.nameOrTitle}</Text>
              )}

              <TextInput
                placeholder="Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                style={styles.input}
              />
              {touched.description && errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}

              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Create Project"
                  onPress={handleSubmit as any}
                />
                <CustomButton
                  title="Cancel"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default FormModal;
