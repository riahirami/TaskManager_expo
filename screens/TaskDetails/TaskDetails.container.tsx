import React from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { WrapperStackParamList } from '../../../navigation/WrapperStackNavigation/WrapperStackNavigation';
import { TASK_DETAILS_SCREEN } from '../../../utils/screenNames';
import TaskDetails from './TaskDetails';

/**
 * Container used to separate TaskDetails logic as a wrapper to TaskDetails screen
 * @returns JSX.Element
 */
interface TaskDetailsContainerProps
  extends NativeStackScreenProps<
    WrapperStackParamList,
    typeof TASK_DETAILS_SCREEN
  > {}

const TaskDetailsContainer: React.FC<TaskDetailsContainerProps> = ({
  navigation,
  route
}): JSX.Element => {
  const { task } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return <TaskDetails task={task} goBack={goBack} />;
};

export default TaskDetailsContainer;
