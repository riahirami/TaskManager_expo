import React from 'react';
import { View } from 'react-native';
import { overlayStyles } from './overlayStyles';


interface OverlayProps {}

const Overlay: React.FC<OverlayProps> = ({}) => {
  return <View style={overlayStyles.container} />;

};

export default Overlay;