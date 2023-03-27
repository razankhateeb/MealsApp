import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
function MealsOverviewScreen({ route, navigation }) {
  const ctaId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(ctaId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === ctaId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [ctaId, navigation]);
  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
