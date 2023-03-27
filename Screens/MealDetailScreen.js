import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../Store/Context/favorites-context";
function MealDetailScreen({ route, navigation }) {
  const FavoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const mealIsFavorite = FavoriteMealsCtx.ids.includes(mealId);
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  function changeFavoriteStatusandler() {
    if (mealIsFavorite) {
      FavoriteMealsCtx.removeFavorite(mealId);
    } else {
      FavoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={changeFavoriteStatusandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, changeFavoriteStatusandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
