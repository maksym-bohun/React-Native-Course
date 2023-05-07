import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constans/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const changeInputHandler = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Please enter the number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    props.onPickNumber(enteredNumber);
  };

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="numeric"
              onChangeText={changeInputHandler}
              value={enteredNumber}
            />
            <View style={styles.actions}>
              <PrimaryButton onPress={resetInputHandler} style={styles.button}>
                Reset
              </PrimaryButton>
              <PrimaryButton
                onPress={confirmInputHandler}
                style={styles.button}
              >
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 80,
    textAlign: "center",
    fontSize: 32,
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    marginVertical: 8,
    // gap: 10,
  },
  button: {
    // width: "40%",
    flex: 1,
  },
});

export default StartGameScreen;
