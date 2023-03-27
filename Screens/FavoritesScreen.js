import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../Store/Context/favorites-context";

function FavoritesScreen() {
  const FavoritesCtx = useContext(FavoritesContext);
  const FavoriteMeals = MEALS.filter((meal) =>
    FavoritesCtx.ids.includes(meal.id)
  );

  if (FavoriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.containerText}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList displayedMeals={FavoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
