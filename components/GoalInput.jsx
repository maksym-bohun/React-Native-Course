import { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.showModal} animation="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("./../assets/images/goal.png")}
          // source={require("./../assets/images/path")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.actions}>
          <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          <Button
            title="Cancel"
            onPress={() => props.setShowModal(false)}
            color="#f31282"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderStyle: "solid",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "90%",
    padding: 10,
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  actions: {
    flexDirection: "row",
    marginTop: 30,
    gap: 20,
  },
});

export default GoalInput;
