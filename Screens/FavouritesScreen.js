import React from "react";
import { useSelector } from "react-redux";

import MealList from "../componenets/MealList";
import { View, Text, StyleSheet } from "react-native";




function FavouritesScreen(props) {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if(favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.favText}>No favourite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
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
    fontSize: 25,
    fontFamily: "open-sans-bold"
  }
});

export default FavouritesScreen;
