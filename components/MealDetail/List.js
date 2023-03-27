import React from "react";
import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint, index) => (
    <View style={styles.listItem} key={index}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
    backgroundColor: "#e2b497",
    borderRadius: 6,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
