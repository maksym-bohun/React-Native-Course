import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const deviceWidth = Dimensions.get("window").width;
const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const { width, height } = useWindowDimensions();

  let content = (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );

  if (width > 500) {
    content = (
      <View style={[styles.rootContainer, styles.rootContainerWide]}>
        <Title>GAME OVER</Title>
        <View style={styles.imageContainerWide}>
          <Image
            source={require("./../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onRestart} style={{ width: 180 }}>
          Start New Game
        </PrimaryButton>
      </View>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70,
  },
  rootContainerWide: { marginTop: 0 },
  imageContainer: {
    width: deviceWidth < 400 ? 150 : 300,
    height: deviceWidth < 400 ? 150 : 300,
    overflow: "hidden",
    margin: 36,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
  imageContainerWide: {
    width: 180,
    height: 180,
    overflow: "hidden",
    margin: 16,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});

export default GameOverScreen;
