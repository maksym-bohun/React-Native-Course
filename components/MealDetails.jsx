import { StyleSheet, View, Text } from "react-native";

const MealDetails = ({ meal, style, mealDetail }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, mealDetail]}>{meal.duration}min</Text>
      <Text style={[styles.detailItem, mealDetail]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, mealDetail]}>
        {meal.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default MealDetails;
