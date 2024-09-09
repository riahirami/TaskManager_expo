import React from 'react';
import { Text, View } from 'react-native';
import { icons } from '../../utils/icons';
import CustomButton from '../CustomButton/CustomButton';
import styles from './screenHeaderStyles';

interface ScreenHeaderProps {
  screenTitle: string;
  hasLeftButton?: boolean;
  hasRightButton?: boolean;
  leftButtonTitle: string;
  leftButtonAction?: () => void;
  rightButtonTitle?: string;
  rightButtonAction?: () => void;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  screenTitle,
  hasLeftButton,
  hasRightButton,
  leftButtonTitle,
  leftButtonAction,
  rightButtonTitle,
  rightButtonAction
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent:
            hasLeftButton && hasRightButton
              ? 'space-between'
              : !hasLeftButton && !hasRightButton
              ? 'center'
              : 'flex-start'
        }
      ]}>
      {hasLeftButton && leftButtonAction && (
        <CustomButton
          title={leftButtonTitle}
          onPress={leftButtonAction}
          hasIcon
          leftIcon={icons.ARROW_LEFT}
        />
      )}
      <Text>{screenTitle}</Text>
      {hasRightButton && rightButtonTitle && rightButtonAction && (
        <CustomButton title={rightButtonTitle} onPress={rightButtonAction} />
      )}
    </View>
  );
};

export default ScreenHeader;
