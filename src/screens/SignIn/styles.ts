import {StyleSheet} from "react-native";
import {Colors} from "../../styles/colors";
import layout from "../../styles/layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: layout.isLarge ? 0 : 14,
    justifyContent: layout.isLarge ? "center" : "flex-start",
    alignItems: layout.isLarge ? "center" : "flex-start"
  },
  formContainer: {
    paddingTop: 8,
    paddingBottom: 32,
    alignItems: "center",
    paddingHorizontal: layout.isLarge ? 20 : 35,
    width: layout.isLarge ? 480 : "100%"
  },
  title: {
    color: Colors.blue,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "800"
  },
  form: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: layout.isLarge ? "row" : "column",
    alignItems: layout.isLarge ? "center" : "flex-start",
    justifyContent: layout.isLarge ? "space-between" : "flex-start"
  },
  label: {
    color: Colors.black,
  },
  input: {
    marginTop: 13,
    marginBottom: 13,
    width: layout.isLarge ? 295 : "100%",
    maxWidth: layout.isLarge ? 295 : "100%",
    height: 39,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Colors.blue,
    paddingHorizontal: 8,
    backgroundColor: Colors.gray
  },
  error: {
    borderColor: Colors.red,
  },
  button: {
    marginTop: 10
  }
})
