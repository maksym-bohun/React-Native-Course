import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subtitleView}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleView: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "50%",
    alignSelf: "center",
    marginBottom: 10,
    margin: 4,
    padding: 6,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
    color: "#ddd",
  },
});

export default Subtitle;
