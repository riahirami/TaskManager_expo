import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';


import { colors } from '../../utils/colors';
import { LOADER_SIZE } from '../../utils/constants';
import styles from './customLoaderStyles';

const CustomLoader = () => {
  return (
        <View style={styles.loaderContainer} pointerEvents="box-none">
          <View style={styles.loader}>
            <ActivityIndicator color={colors.PRIMARY} size={LOADER_SIZE} />
          </View>
        </View>
      );  };

export default CustomLoader;