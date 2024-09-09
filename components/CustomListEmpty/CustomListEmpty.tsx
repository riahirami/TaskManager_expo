import React from 'react';
import { Text, View } from 'react-native';

import styles from './customListEmptyStyles';
interface CustomListEmptyProps {
  text: string;
}

const CustomListEmpty: React.FC<CustomListEmptyProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomListEmpty;
