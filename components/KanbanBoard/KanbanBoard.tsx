import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
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
  const [incompleteTasks, setIncompleteTasks] = useState(
    tasks.filter((task) => task.status === 'incomplete')
  );
  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter((task) => task.status === 'completed')
  );

  const onDragEnd = ({
    data,
    from,
    to
  }: {
    data: Task[];
    from: number;
    to: number;
  }) => {
    // If the task is moved across columns, update the status
    if (from !== to) {
      const draggedTask = data[to];
      const newStatus =
        to >= incompleteTasks.length ? 'completed' : 'incomplete';

      updateTaskStatus({ ...draggedTask, status: newStatus });

      if (newStatus === 'completed') {
        setIncompleteTasks((prev) =>
          prev.filter((task) => task.id !== draggedTask.id)
        );
        setCompletedTasks((prev) => [
          ...prev,
          { ...draggedTask, status: newStatus }
        ]);
      } else {
        setCompletedTasks((prev) =>
          prev.filter((task) => task.id !== draggedTask.id)
        );
        setIncompleteTasks((prev) => [
          ...prev,
          { ...draggedTask, status: newStatus }
        ]);
      }
    }
  };

  return (
    <View style={styles.kanbanContainer}>
      {/* Incomplete Tasks */}
      <View style={styles.kanbanColumn}>
        <Text style={styles.kanbanTitle}>Incomplete Tasks</Text>
        <DraggableFlatList
          data={incompleteTasks}
          keyExtractor={(item) => item.id}
          onDragEnd={onDragEnd}
          renderItem={({ item, drag }) => (
            <TaskCard
              task={item}
              drag={drag}
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
        <DraggableFlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          onDragEnd={onDragEnd}
          renderItem={({ item, drag }) => (
            <TaskCard
              task={item}
              drag={drag}
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
