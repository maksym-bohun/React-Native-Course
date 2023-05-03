import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  //   const deleteGoalHandler = (e) => {
  //     console.log(e.target);
  //     props.onDeleteGoal(props.id);
  //   };

  return (
    <Pressable
      onPress={props.onDeleteGoal.bind(this, props.id)}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
    padding: 6,
  },
  goalItemText: {
    color: "#fff",
  },
  pressedItem: {
    // color: "#000",
    opacity: 0.5,
  },
});

export default GoalItem;
