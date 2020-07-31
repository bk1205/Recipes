import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CommonActions } from "@react-navigation/native";

import HeaderButton from "../componenets/HeaderButton";
import colors from "../constants/colors";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/actions/meals";

function FilterSwitch(props) {
  return (
    <View style={styles.switchContainer}>
      <Text>{props.children}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: colors.primary }}
        thumbColor="white"
      />
    </View>
  );
}

function FilterScreen(props) {
  const [isGlutenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    // console.log(appliedFilters)
    dispatch(setFilter(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    props.navigation.dispatch(CommonActions.setParams({ save: saveFilter }));
  }, [saveFilter]);

  //In Screen we are adding menu Icon using setOptions
  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={props.route.params?.save}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        value={isGlutenFree}
        onChange={(newValue) => setIsGluttenFree(newValue)}
      >
        Gluten-Free
      </FilterSwitch>
      <FilterSwitch
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      >
        Lactose-Free
      </FilterSwitch>
      <FilterSwitch
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      >
        Vegan
      </FilterSwitch>
      <FilterSwitch
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      >
        Vegetarian
      </FilterSwitch>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    padding: 10,
  },
  switchContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default FilterScreen;
