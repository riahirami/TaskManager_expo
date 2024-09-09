import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';
import { styles } from './customButtonStyles';
interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  onPress:()=>void;
  bgColor?:string;
  hasIcon?:boolean;
  leftIcon?:ImageSourcePropType | undefined
}

/**
 * Returns a customizable button (text, textColor, background, onPress action)
 * @param props
 * @returns JSX.Element
 */
const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress,bgColor, isDisabled,hasIcon,leftIcon }) => {
  return (
    <Pressable style={[styles.container,{backgroundColor: bgColor}]} onPress={onPress} disabled={isDisabled ?? false}>
{    hasIcon &&  <Image source={leftIcon} style={styles.iconStyle} width={20} height={20} />}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
