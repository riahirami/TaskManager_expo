import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Task } from '../../models/Tasks/Task';

import TaskCard from '../TaskCard/TaskCard';
import styles from './kanbanBoardStyles';
interface KanbanBoardProps {
  tasks: Task[];
  updateTaskStatus: (task: Task) => void;
  editTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  navigateToTaskDetails: (task: Task) => void;
  addTask: (task: { title: string; description: string }) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({
  tasks,
  isModalVisible,
  setModalVisible,
  navigateToTaskDetails,
  addTask,
  updateTaskStatus,
  editTask,
  removeTask
}) => {
  // Filter tasks by status
  const incompleteTasks = tasks.filter((task) => task.status === 'incomplete');
  const completedTasks = tasks.filter((task) => task.status === 'completed');

  return (
    <View style={styles.kanbanContainer}>
      {/* Incomplete Tasks */}
      <View style={styles.kanbanColumn}>
        <Text style={styles.kanbanTitle}>Incomplete Tasks</Text>
        <FlatList
          data={incompleteTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              updateTaskStatusAction={updateTaskStatus}
              editTask={editTask}
              removeTask={removeTask}
              navigateToTaskDetails={navigateToTaskDetails}
              addTask={addTask}
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
            />
          )}
          ListEmptyComponent={<Text>No incomplete tasks</Text>}
        />
      </View>

      {/* Completed Tasks */}
      <View style={styles.kanbanColumn}>
        <Text style={styles.kanbanTitle}>Completed Tasks</Text>
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              updateTaskStatusAction={updateTaskStatus}
              editTask={editTask}
              removeTask={removeTask}
              navigateToTaskDetails={navigateToTaskDetails}
              addTask={addTask}
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
            />
          )}
          ListEmptyComponent={<Text>No completed tasks</Text>}
        />
      </View>
    </View>
  );
};

export default KanbanBoard;
