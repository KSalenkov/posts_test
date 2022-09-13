import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  GestureResponderEvent
} from "react-native";
import {styles} from "./styles";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  label: string;
  onPress?: (event: GestureResponderEvent) => void
}

export const Button: React.FC<ButtonProps> = ({
  style,
  label,
  loading = false,
  onPress
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]} onPress={onPress}>
      {loading ? <ActivityIndicator /> : <Text style={styles.title}>{label}</Text>}
    </TouchableOpacity>
  )
}
