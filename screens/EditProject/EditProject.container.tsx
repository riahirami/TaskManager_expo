import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert } from 'react-native';
import EditProject from './EditProject';
import { useUpdateProjectMutation } from '../../store/api/tasksApi';
import { EDIT_PROJECT_SCREEN, HOME_SCREEN } from '../../utils/screenNames';
import { WrapperStackParamList } from '../../navigation/WrapperStackNavigation/WrapperStackNavigation';

interface EditProjectContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof EDIT_PROJECT_SCREEN
  > {}
const EditProjectContainer: React.FC<EditProjectContainerProps> = ({
  navigation,
  route
}) => {
  const [editProjectApi, { isLoading }] = useUpdateProjectMutation();

  const { project } = route.params;

  const handleEditProject = async (values: {
    name: string;
    description: string;
  }) => {
    const projectData = { name: values.name, description: values.description };
    try {
      await editProjectApi({ id: project.id, data: projectData }).unwrap();
      Alert.alert('Success', 'Project edited successfully!');
      navigation.navigate(HOME_SCREEN);
    } catch (error) {
      Alert.alert('Error', 'Failed to edit project');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <EditProject
      goBack={goBack}
      handleEditProject={handleEditProject}
      projectDetails={project}
      isLoading={isLoading}
    />
  );
};

export default EditProjectContainer;
