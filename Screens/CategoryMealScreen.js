import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../componenets/MealList"

function CategoryMealScreen(props) {

  const { categoryId } = props.route.params;
  const selectedCateg = CATEGORIES.find((categ) => categ.id === categoryId);
  props.navigation.setOptions({
    title: selectedCateg.title,
  });
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeal = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if(displayMeal.length === 0 || !displayMeal) {
    return (
      <View style={styles.screen}>
        <Text style={styles.favText}>No meals found, maybe check your filters?</Text>
      </View>
    );
  }

  return <MealList listData={displayMeal} navigation={props.navigation} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  favText: {
    color: "#27496d",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "open-sans-bold"
  }
});

export default CategoryMealScreen;
