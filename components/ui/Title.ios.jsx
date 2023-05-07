import { Text, StyleSheet, Platform } from "react-native";

const Title = (props) => {
  return <Text style={[styles.title, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 7,
    maxWidth: "80%",
  },
});

export default Title;
