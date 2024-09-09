import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Project } from '../../../models/projects/Project';
import { WrapperStackParamList } from '../../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import {
  useCreateProjectMutation,
  useLazyGetProjectListQuery
} from '../../../store/api/tasksApi';
import {
  setLoaderInvisible,
  setLoaderVisible
} from '../../../store/features/loader/loaderSlice';
import { useAppDispatch } from '../../../store/hooks';
import {
  EDIT_PROJECT_SCREEN,
  HOME_SCREEN,
  PROJECT_TASKS_SCREEN
} from '../../../utils/screenNames';
import Home from './Home';

/**
 * Container used to separate Home logic as a wrapper to Home screen
 * @returns JSX.Element
 */
interface HomeContainerProps
  extends NativeStackScreenProps<WrapperStackParamList, typeof HOME_SCREEN> {}

const HomeContainer: React.FC<HomeContainerProps> = ({
  navigation
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const [getProjectApi, { data }] = useLazyGetProjectListQuery();
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isKanbanView, setIsKanbanView] = useState(false);

  const getProjectAction = async (): Promise<void> => {
    dispatch(setLoaderVisible());
    try {
      await getProjectApi().unwrap();
    } catch (error) {
      Alert.alert('Error', 'Fetch project failed');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const createProjectAction = async (values: {
    nameOrTitle: string;
    description: string;
  }) => {
    const projectData = {
      name: values.nameOrTitle,
      description: values.description
    };
    try {
      await createProject(projectData).unwrap();
      Alert.alert('Success', 'Project created successfully!');
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to create project');
    }
  };

  const editProjectAction = async (project: Project) => {
    navigation.navigate(EDIT_PROJECT_SCREEN, { project: project });
  };

  const navigateToProjectDetails = (project: Project) => {
    navigation.navigate(PROJECT_TASKS_SCREEN, {
      project: project
    });
  };

  useEffect(() => {
    getProjectAction();
  }, []);

  return (
    <Home
      data={data}
      navigateToProjectDetails={navigateToProjectDetails}
      handleCreateProject={createProjectAction}
      editProject={editProjectAction}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default HomeContainer;
