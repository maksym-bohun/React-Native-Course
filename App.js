import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  const startAddGoalHandler = () => {
    setShowModal(true);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  };

  function addGoalHandler(goal) {
    setGoalsList((prevGoals) => [
      { text: goal, key: Math.random().toString() },
      ...prevGoals,
    ]);
    setShowModal(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* {!showModal && ( */}
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {/* )} */}
        {showModal && (
          <GoalInput
            onAddGoal={addGoalHandler}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
