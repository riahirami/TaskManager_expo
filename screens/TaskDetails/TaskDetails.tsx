import React from 'react';
import { Text, View } from 'react-native';

import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { Task } from '../../models/Tasks/Task';
import { upperCaseFirstLetter } from '../../utils/helpers';
import styles from './taskDetailsStyles';
/**
 * Represents TaskDetails screen ui
 * @returns JSX.Element
 */
interface TaskDetailsProps {
  task: Task;
  goBack: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  task,
  goBack
}): JSX.Element => {
  return (
    <>
      <ScreenHeader
        screenTitle={'Task Details'}
        leftButtonTitle={'Back'}
        hasLeftButton
        leftButtonAction={goBack}
        hasRightButton={false}
      />
      <View style={styles.container}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.titleText}>{upperCaseFirstLetter(task.title)}</Text>
        <Text style={styles.label}>Description :</Text>
        <Text style={styles.titleText}>
          {upperCaseFirstLetter(task.description)}
        </Text>
        <Text style={styles.label}>Status :</Text>
        <Text style={styles.titleText}>
          {upperCaseFirstLetter(task.status ?? '')}
        </Text>
      </View>
    </>
  );
};

export default TaskDetails;
