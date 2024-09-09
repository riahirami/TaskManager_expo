import React from 'react';
import { FlatList, Switch, Text, View } from 'react-native';
import { Task } from '../../models/Tasks/Task';

import CustomListEmpty from '../../components/CustomListEmpty/CustomListEmpty';
import FormModalTask from '../../components/FormModalTask/FormModalTask';
import KanbanBoard from '../../components/KanbanBoard/KanbanBoard';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import TaskCard from '../../components/TaskCard/TaskCard';
import { colors } from '../../utils/colors';
import { NO_TASKS } from '../../utils/constants';
import { upperCaseFirstLetter } from '../../utils/helpers';
import styles from './projectTasksStyles';
/**
 * Represents ProjectTasks screen ui
 * @returns JSX.Element
 */
interface ProjectTasksProps {
  data: Task[] | undefined;
  projectDetails: { name: string; description: string };
  navigateToTaskDetails: (task: Task) => void;
  addTask: (task: { title: string; description: string }) => void;
  editTask: (task: Task) => void;
  updateTaskStatusAction: (task: Task) => void;
  removeTask: (id: string) => void;
  isModalVisible: boolean;
  goBackAction: () => void;
  setModalVisible: (value: boolean) => void;
  isKanbanView: boolean;
  setIsKanbanView: (value: boolean) => void;
}

const ProjectTasks: React.FC<ProjectTasksProps> = ({
  projectDetails,
  navigateToTaskDetails,
  data,
  goBackAction,
  addTask,
  updateTaskStatusAction,
  isModalVisible,
  setModalVisible,
  editTask,
  removeTask,
  isKanbanView,
  setIsKanbanView
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScreenHeader
        screenTitle={'Project Tasks'}
        hasLeftButton
        leftButtonTitle={'Back'}
        leftButtonAction={goBackAction}
        hasRightButton={true}
        rightButtonTitle={'Add Task'}
        rightButtonAction={() => {
          setModalVisible(true);
        }}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>
          Title:
          <Text style={styles.titleText}>
            {upperCaseFirstLetter(projectDetails.name)}
          </Text>
        </Text>
        <Text style={styles.label}>
          Description:
          <Text style={styles.titleText}>
            {upperCaseFirstLetter(projectDetails.description)}
          </Text>
        </Text>
      </View>

      <View style={styles.switchContainer}>
        <Text>List View</Text>
        <Switch
          thumbColor={colors.PRIMARY_20}
          trackColor={{ false: colors.SECONDARY, true: colors.PRIMARY }}
          value={isKanbanView}
          onValueChange={() => setIsKanbanView(!isKanbanView)}
        />
        <Text>Kanban View</Text>
      </View>

      {isModalVisible && (
        <FormModalTask
          confirmForm={addTask}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      {isKanbanView ? (
        // Kanban View
        <KanbanBoard
          tasks={data as unknown as Task[]}
          updateTaskStatus={updateTaskStatusAction}
          editTask={editTask}
          removeTask={removeTask}
          navigateToTaskDetails={navigateToTaskDetails}
          addTask={addTask}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        //  list view
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              key={item.id}
              task={item}
              navigateToTaskDetails={navigateToTaskDetails}
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              addTask={addTask}
              updateTaskStatusAction={updateTaskStatusAction}
              editTask={editTask}
              removeTask={removeTask} drag={undefined}            />
          )}
          ListEmptyComponent={<CustomListEmpty text={NO_TASKS} />}
        />
      )}
    </View>
  );
};

export default ProjectTasks;
