import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constans/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24,
    margin: deviceWidth < 400 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 24 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
