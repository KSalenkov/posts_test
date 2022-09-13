import React, {PropsWithChildren} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {styles} from "./styles";

interface ShadowBoxProps {
  style?: StyleProp<ViewStyle>
}

export const ShadowBox: React.FC<PropsWithChildren<ShadowBoxProps>> = ({children, style}) => {

  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}
