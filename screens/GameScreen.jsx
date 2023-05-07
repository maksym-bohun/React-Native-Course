import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary;
let maxBoundary;

const GameScreen = (props) => {
  console.log("USERNUMBER", props.userNumber);
  const initialGuess = generateRandomNumber(1, 100, props.userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentNumber == props.userNumber) {
      console.log("GAMEOVER");
      props.setRounds(guessRounds.length);
      props.onGameOver(guessRounds.length);
    }
  }, [currentNumber, props.userNumber, props.onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentNumber < props.userNumber) ||
      (direction === "higher" && currentNumber > props.userNumber)
    ) {
      // console.log("LIE");
      Alert.alert("Don't lie!", "You know that's wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (props.userNumber === currentNumber) {
      Alert.alert("Congratulations!", "Phone won!", [
        { text: "Cool", style: "default" },
      ]);
    }

    if (direction === "lower") maxBoundary = currentNumber;
    else minBoundary = currentNumber;
    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentNumber
    );
    setCurrentNumber(newRndNumber);
    setGuessRounds((current) => [newRndNumber, ...current]);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={styles.btn}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" color="#fff" size={24} />
          </PrimaryButton>
          <PrimaryButton
            style={styles.btn}
            onPress={nextGuessHandler.bind(this, "higher")}
          >
            <Ionicons name="md-add" color="#fff" size={24} />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={itemData.index + 1}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
  },

  buttonsContainer: {
    // flex: 1,
    flexDirection: "row",
  },

  btn: {
    flex: 1,
    margin: 10,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
