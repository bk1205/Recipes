import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../componenets/CategoryGridTile";

function CategoriesScreen(props) {
  
  const renderCategories = itemData => {
    return (
      <CategoryGridTile
        onPress={() =>
          props.navigation.navigate("Profile", { categoryId: itemData.item.id })
        }
        title={itemData.item.title} 
        color={itemData.item.color}
        />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderCategories}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  row: {
    flex: 1,
  },
});

export default CategoriesScreen;
