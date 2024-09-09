import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Project } from '../../models/projects/Project';
import { Task } from '../../models/Tasks/Task';
import EditProjectContainer from '../../screens/EditProject/EditProject.container';
import EditTaskContainer from '../../screens/EditTask/EditTask.container';
import HomeContainer from '../../screens/Home/Home.container';
import ProjectTasksContainer from '../../screens/ProjectTasks/ProjectTasks.container';
import TaskDetailsContainer from '../../screens/TaskDetails/TaskDetails.container';
import {
  EDIT_PROJECT_SCREEN,
  EDIT_TASK_SCREEN,
  HOME_SCREEN,
  LOGIN_USER_SCREEN,
  PROJECT_TASKS_SCREEN,
  REGISTER_USER_SCREEN,
  TASK_DETAILS_SCREEN
} from '../../utils/screenNames';

export type WrapperStackParamList = {
  [LOGIN_USER_SCREEN]: undefined;
  [REGISTER_USER_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  [EDIT_PROJECT_SCREEN]: { project: Project };
  [EDIT_TASK_SCREEN]: { task: Task };
  [TASK_DETAILS_SCREEN]: { task: Task };
  [PROJECT_TASKS_SCREEN]: { project: Project };
};

const WrapperStack = createNativeStackNavigator<WrapperStackParamList>();

const WrapperStackNavigation = () => {
  return (
    <WrapperStack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false
      }}>
      <WrapperStack.Screen name={HOME_SCREEN} component={HomeContainer} />
      <WrapperStack.Screen
        name={PROJECT_TASKS_SCREEN}
        component={ProjectTasksContainer}
      />
      <WrapperStack.Screen
        name={TASK_DETAILS_SCREEN}
        component={TaskDetailsContainer}
      />
      <WrapperStack.Screen
        options={{
          presentation: 'card'
        }}
        name={EDIT_PROJECT_SCREEN}
        component={EditProjectContainer}
      />
      <WrapperStack.Screen
        options={{
          presentation: 'card'
        }}
        name={EDIT_TASK_SCREEN}
        component={EditTaskContainer}
      />
    </WrapperStack.Navigator>
  );
};

export default WrapperStackNavigation;
