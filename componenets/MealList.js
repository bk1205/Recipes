import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import MealItem from "../componenets/MealItem"

function MealList(props) {
  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onPress={() =>
          props.navigation.navigate("Details", { mealId: itemData.item.id })
        }
      />
    );
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        style={{ width: "100%" }}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;