import React, { useEffect, useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { Alert } from 'react-native';
import { TaskStatusEnum } from '../../../enum/global';
import { Task } from '../../../models/Tasks/Task';
import { WrapperStackParamList } from '../../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useLazyGetTaskListQuery,
  useUpdateTaskStatusMutation
} from '../../../store/api/tasksApi';
import {
  setLoaderInvisible,
  setLoaderVisible
} from '../../../store/features/loader/loaderSlice';
import { useAppDispatch } from '../../../store/hooks';
import {
  EDIT_TASK_SCREEN,
  PROJECT_TASKS_SCREEN,
  TASK_DETAILS_SCREEN
} from '../../../utils/screenNames';
import ProjectTasks from './ProjectTasks';

/**
 * Container used to separate ProjectTasks logic as a wrapper to ProjectTasks screen
 * @returns JSX.Element
 */
interface ProjectTasksContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof PROJECT_TASKS_SCREEN
  > {}

const ProjectTasksContainer: React.FC<ProjectTasksContainerProps> = ({
  navigation,
  route
}): JSX.Element => {
  const { project } = route.params;

  // TODO : move to redux
  const [isModalVisible, setModalVisible] = useState(false);
  const [isKanbanView, setIsKanbanView] = useState(false);

  const [getProjectTaskApi, { data }] = useLazyGetTaskListQuery();
  const [createTaskApi] = useCreateTaskMutation();
  const [removeTaskApi] = useDeleteTaskMutation();
  const [updateTaskStatusApi] = useUpdateTaskStatusMutation();

  const dispatch = useAppDispatch();

  const getProjectTaskAction = async (): Promise<void> => {
    dispatch(setLoaderVisible());
    try {
      await getProjectTaskApi(project.id).unwrap();
    } catch (error) {
      console.error('Error fetching project tasks:', error);
      Alert.alert('Error', 'Failed to fetch project tasks.');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const addTaskAction = async (values: {
    title: string;
    description: string;
  }) => {
    const taskData = { title: values.title, description: values.description };
    dispatch(setLoaderVisible());
    try {
      await createTaskApi({ ...taskData, project_id: project.id }).unwrap();
      Alert.alert('Success', 'Task created successfully!');
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to create task.');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const editTaskAction = (task: Task) => {
    navigation.navigate(EDIT_TASK_SCREEN, { task: task });
  };

  const navigateToTaskDetails = (task: Task) => {
    navigation.navigate(TASK_DETAILS_SCREEN, {
      task: task
    });
  };
  const updateTaskStatusAction = async (task: Task) => {
    dispatch(setLoaderVisible());
    const newStatus =
      task.status === TaskStatusEnum.Completed
        ? TaskStatusEnum.Incomplete
        : TaskStatusEnum.Completed;
    try {
      await updateTaskStatusApi({ id: task.id, status: newStatus }).unwrap();
    } catch (error) {
      Alert.alert('Error', 'Failed to update task status.');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };

  const removeTaskAction = async (id: string) => {
    dispatch(setLoaderVisible());
    try {
      await removeTaskApi(id).unwrap();
    } catch (error) {
      Alert.alert('Error', 'Failed to remove task.');
    } finally {
      dispatch(setLoaderInvisible());
    }
  };
  const goBackAction = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getProjectTaskAction();
  }, []);

  return (
    <ProjectTasks
      projectDetails={project}
      navigateToTaskDetails={navigateToTaskDetails}
      addTask={addTaskAction}
      updateTaskStatusAction={updateTaskStatusAction}
      goBackAction={goBackAction}
      data={data}
      editTask={editTaskAction}
      removeTask={removeTaskAction}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
      isKanbanView={isKanbanView}
      setIsKanbanView={setIsKanbanView}
    />
  );
};

export default ProjectTasksContainer;
