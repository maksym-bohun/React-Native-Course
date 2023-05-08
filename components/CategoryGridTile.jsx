import { StyleSheet } from "react-native";
import { View, Text, Pressable, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={onPress}
      >
        <View style={[{ backgroundColor: color }, styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    // padding: 10,
    height: 150,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  button: { flex: 1 },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: 700,
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default CategoryGridTile;
