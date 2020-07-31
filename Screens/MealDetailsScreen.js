import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../componenets/HeaderButton";
import DefaultText from "../componenets/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

function MealDetailsScreen(props) {
  const { mealId } = props.route.params;

  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const isFavourite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  // console.log(isFavourite);
  const dispatch = useDispatch();
  props.navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerTitleContainerStyle: { width: "66%" },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavourite ? "ios-star" : "ios-star-outline"}
          onPress={() => dispatch(toggleFavorite(selectedMeal.id))}
        />
      </HeaderButtons>
    ),
  });

 
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
});

export default MealDetailsScreen;
