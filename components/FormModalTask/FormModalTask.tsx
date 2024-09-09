import { Formik } from 'formik';
import React from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import CustomButton from '../CustomButton/CustomButton';
import styles from './formModalTaskStyles';

const getValidationSchema = () => {
  return Yup.object().shape({
    title: Yup.string()
      .required(`Title is required`)
      .min(3, `Task title must be at least 3 characters long`),
    description: Yup.string()
      .required('Description is required')
      .min(5, 'Description must be at least 5 characters long')
  });
};
interface TaskType {
  id: string;
  title: string;
  description: string;
}

interface TaskFormValues {
  title: string;
  description: string;
}
interface FormModalProps {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  confirmForm: (task: TaskFormValues, taskId?: string) => void;
}

const FormModalTask: React.FC<FormModalProps> = ({
  isModalVisible,
  setModalVisible,
  confirmForm
}) => {
  const validationSchema = getValidationSchema();
  const initialValues = {
    title: '',
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
              title: values.title,
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
              <Text>Create New Task</Text>
              <TextInput
                placeholder={'Task Title'}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                style={styles.input}
              />
              {touched.title && errors.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
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
                  title={'Create task'}
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

export default FormModalTask;
