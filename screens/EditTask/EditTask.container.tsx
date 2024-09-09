import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert } from 'react-native';
import { WrapperStackParamList } from '../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import { useUpdateTaskMutation } from '../../store/api/tasksApi';
import { EDIT_TASK_SCREEN } from '../../utils/screenNames';
import EditProject from './EditTask';

interface EditTaskContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof EDIT_TASK_SCREEN
  > {}
const EditTaskContainer: React.FC<EditTaskContainerProps> = ({
  navigation,
  route
}) => {
  const [editTaskApi, { isLoading }] = useUpdateTaskMutation();

  const { task } = route.params;

  const handleEditTask = async (values: {
    title: string;
    description: string;
  }) => {
    const projectData = {
      title: values.title,
      description: values.description
    };
    try {
      await editTaskApi({ id: task.id, data: projectData }).unwrap();
      Alert.alert('Success', 'Task updated successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to create project');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <EditProject
      goBack={goBack}
      handleEditTask={handleEditTask}
      isLoading={isLoading}
      taskDetails={task}
    />
  );
};

export default EditTaskContainer;
