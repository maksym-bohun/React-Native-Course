import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import { Button } from "react-native";
import IconButton from "../components/IconButton";

const MealsDetailScreen = ({ route, navigation }) => {
  const meal = route.params.meal;

  const headerButtonHandler = () => {
    console.log("Pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="heart" color="#fff" onPress={headerButtonHandler} />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{meal.title}</Text>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <MealDetails
        meal={meal}
        style={styles.mealDetails}
        mealDetail={styles.mealDetail}
      />
      <ScrollView style={styles.listContainer}>
        <Subtitle title="Ingredients" />
        <List array={meal.ingredients} />
        <Subtitle title="Steps" />
        <List array={meal.steps} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 5,
    marginBottom: 20,
    color: "#ddd",
    textAlign: "center",
  },

  mealDetails: {
    marginVertical: 10,
  },

  mealDetail: { color: "#ddd" },

  listContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
  },
});

export default MealsDetailScreen;
