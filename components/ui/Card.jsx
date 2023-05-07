import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constans/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 400 ? 28 : 40,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});

export default Card;
