import React from "react";
import { Text, View, StyleSheet } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detaiItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detaiItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detaiItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detaiItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
