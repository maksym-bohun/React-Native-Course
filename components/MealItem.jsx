import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({ item }) => {
  const navigation = useNavigation();

  const navigateToMealHandler = () => {
    navigation.navigate("Details", {
      meal: item,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={navigateToMealHandler}
      >
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <MealDetails meal={item} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  image: {
    width: "100%",
    height: 200,
    // overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  title: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },

  pressed: {
    opacity: 0.8,
  },
});

export default MealItem;
