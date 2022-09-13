import {StyleSheet} from "react-native";
import {Colors} from "../../styles/colors";
import layout from "../../styles/layout";

import {HORIZONTAL_PADDING_ON_LARGE} from "../../screens/Posts/styles";

const offset = 20;
const widthOnLarge = (layout.width - HORIZONTAL_PADDING_ON_LARGE * 2 - offset) / 2;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 17,
    paddingBottom: 17,
    width: layout.isLarge ? widthOnLarge : "100%",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 22,
  },
  margin: {
    marginBottom: layout.isLarge ? 25 : 10
  },
  marginRight: {
    marginRight: offset
  },
  text: {
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 19,
    color: Colors.black
  },
  marginText: {
    marginBottom: 17
  },
})
