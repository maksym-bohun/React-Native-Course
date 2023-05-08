import { View, StyleSheet, FlatList, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catID) >= 0;
  });

  const renderMealItem = (itemData) => {
    return <MealItem item={itemData.item} />;
  };

  const categoryTitle = CATEGORIES.find((item) => item.id === catID).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
