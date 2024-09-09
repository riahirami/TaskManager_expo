import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { TaskStatusEnum } from '../../enum/global';
import { Task } from '../../models/Tasks/Task';
import { colors } from '../../utils/colors';
import { upperCaseFirstLetter } from '../../utils/helpers';
import CustomButton from '../CustomButton/CustomButton';
import FormModalTask from '../FormModalTask/FormModalTask';
import styles from './taskCardStyles';
interface TaskCardProps {
  task: Task;
  navigateToTaskDetails: (task: Task) => void;
  addTask: (task: { title: string; description: string }) => void;
  editTask: (task: Task) => void;
  updateTaskStatusAction: (task: Task) => void;
  removeTask: (id: string) => void;
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  drag: any;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  drag,
  navigateToTaskDetails,
  addTask,
  editTask,
  updateTaskStatusAction,
  removeTask,
  isModalVisible,
  setModalVisible
}) => {
  const markAsMsg =
    task.status === TaskStatusEnum.Completed
      ? 'Mark as Incomplete'
      : 'Mark as Completed';

  // TODO : Move this to a helper function
  const getTaskStatusColor = () => {
    switch (task.status) {
      case TaskStatusEnum.Completed:
        return colors.PRIMARY;
      case TaskStatusEnum.Incomplete:
        return colors.SECONDARY;
      default:
        return colors.BLACK;
    }
  };

  return (
    <View
      style={[
        styles.cardContainer,
        { borderWidth: 4, borderBottomColor: getTaskStatusColor() }
      ]}>
      {isModalVisible && (
        <FormModalTask
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          confirmForm={addTask}
        />
      )}

      <Pressable onPress={() => navigateToTaskDetails(task)} onLongPress={drag}>
        <View style={styles.innerContainer}>
          <View style={styles.taskDetailsContainer}>
            <Text style={styles.taskName}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <Text style={[styles.statusText, { color: getTaskStatusColor() }]}>
              {upperCaseFirstLetter(task.status ?? '')}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title={'Edit'} onPress={() => editTask(task)} />
            <CustomButton
              title={'Remove'}
              onPress={() => removeTask(task.id)}
            />
            <CustomButton
              title={markAsMsg}
              onPress={() => updateTaskStatusAction(task)}
              bgColor={getTaskStatusColor()}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TaskCard;
