import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressEffect : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.InnerContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  InnerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pressEffect: {
    opacity: 0.5,
  },
});
