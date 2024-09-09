import { styles } from './editTaskStyle';

import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { Task } from '../../models/Tasks/Task';

// Validation schema using Yup
const ProjectSchema = Yup.object().shape({
  title: Yup.string().required('Task title is required'),
  description: Yup.string().required('Task description is required')
});

interface EditTaskProps {
  handleEditTask: (values: { title: string; description: string }) => void;
  goBack: () => void;
  isLoading: boolean;
  taskDetails: Task;
}

const EditTask: React.FC<EditTaskProps> = ({
  handleEditTask,
  goBack,
  taskDetails,
  isLoading
}) => {
  const initialValues = {
    title: taskDetails.title ?? '',
    description: taskDetails.description ?? ''
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        screenTitle={'Edit Task'}
        hasLeftButton={false}
        leftButtonTitle={'Back'}
        leftButtonAction={goBack}
        hasRightButton={false}
      />

      <View style={styles.innerContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={ProjectSchema}
          onSubmit={handleEditTask}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <>
              <Text style={styles.label}>task title</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                placeholder="Enter task title"
              />
              {touched.title && errors.title && (
                <Text style={styles.error}>{errors.title}</Text>
              )}

              <Text style={styles.label}>task Description</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                placeholder="Enter task description"
                multiline
              />
              {touched.description && errors.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <View style={styles.buttonContainer}>
                <CustomButton
                  onPress={handleSubmit as () => void}
                  title="Edit task"
                  isDisabled={isLoading}
                />
                <CustomButton onPress={goBack} title="Cancel" />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default EditTask;
