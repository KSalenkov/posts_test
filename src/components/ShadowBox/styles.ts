import {StyleSheet} from "react-native";
import {Colors} from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: Colors.blue,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
