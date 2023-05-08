import { Text, StyleSheet, View } from "react-native";

const List = ({ array }) => {
  return (
    <>
      {array.map((item) => (
        <View style={styles.item}>
          <Text style={styles.itemText} key={item}>
            {item}
          </Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    // color: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    textAlign: "center",
  },
});

export default List;
