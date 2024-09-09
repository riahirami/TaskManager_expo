import { styles } from './editProjectStyle';

import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton/CustomButton';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { Project } from '../../models/projects/Project';

// Validation schema using Yup
const ProjectSchema = Yup.object().shape({
  name: Yup.string().required('Project name is required'),
  description: Yup.string().required('Project description is required')
});

interface EditProjectProps {
  goBack: () => void;
  handleEditProject: (values: { name: string; description: string }) => void;
  projectDetails: Project;
  isLoading: boolean;
}

const EditProject: React.FC<EditProjectProps> = ({
  goBack,
  handleEditProject,
  projectDetails,
  isLoading
}) => {
  const initialValues = {
    name: projectDetails.name ?? '',
    description: projectDetails.description ?? ''
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        screenTitle={'Edit Project'}
        hasLeftButton={false}
        leftButtonTitle={'Back'}
        leftButtonAction={goBack}
        hasRightButton={false}
      />
      <View style={styles.innerContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={ProjectSchema}
          onSubmit={handleEditProject}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <>
              <Text style={styles.label}>Project Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Enter project name"
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <Text style={styles.label}>Project Description</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                placeholder="Enter project description"
                multiline
              />
              {touched.description && errors.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <View style={styles.buttonContainer}>
                <CustomButton
                  onPress={handleSubmit as () => void}
                  title="Edit Project"
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

export default EditProject;
