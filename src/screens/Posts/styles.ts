import {StyleSheet} from "react-native";
import {Colors} from "../../styles/colors";
import layout from "../../styles/layout";

export const HORIZONTAL_PADDING_ON_LARGE = 37;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: layout.isLarge ? 25 : 10,
    paddingHorizontal: layout.isLarge ? HORIZONTAL_PADDING_ON_LARGE : 13
  },
})
