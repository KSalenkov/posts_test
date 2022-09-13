import {StyleSheet} from "react-native";
import {Colors} from "../../styles/colors"

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: Colors.orange
  },
  container: {
    width: "100%",
    height: 118,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  logoWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    marginLeft: 8,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "800",
    color: Colors.darkGray,
  }
})
