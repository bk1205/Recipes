import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailsScreen from "../Screens/MealDetailsScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import colors from "../constants/colors";
import HeaderButton from "../componenets/HeaderButton";

const Stack = createStackNavigator();
const FavStack = createStackNavigator();
const FilterStack = createStackNavigator();

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const defaultScreenOptions = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: "white",
  headerTitleStyle: { fontFamily: "open-sans-bold" },
};
function MealsNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        }}
        name="Meals Categories"
        component={CategoriesScreen}
      />
      <Stack.Screen name="Profile" component={CategoryMealScreen} />
      <Stack.Screen name="Details" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
}

function FavStackNavigator(props) {
  return (
    <FavStack.Navigator screenOptions={defaultScreenOptions}>
      <FavStack.Screen
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <FavStack.Screen name="Details" component={MealDetailsScreen} />
    </FavStack.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.accent,
        labelStyle: { fontFamily: "open-sans" },
      }}
      shifting={true}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarLabel: Platform.OS === "android" && <Text style={{fontFamily: "open-sans"}} >Meals</Text>,
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
          tabBarColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavStackNavigator}
        options={{
          tabBarLabel: Platform.OS === "android" && <Text style={{fontFamily: "open-sans"}} >Favourites</Text>,
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarColor: colors.accent,
          
        }}
      />
    </Tab.Navigator>
  );
}

function FilterStackNavigator({ navigation }) {
  return (
    <FilterStack.Navigator screenOptions={defaultScreenOptions}>
      <FilterStack.Screen name="Filters" component={FilterScreen} />
    </FilterStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MenuNavigator() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeTintColor: colors.accent }}
      drawerStyle={{
        width: "60%",
      }}
    >
      <Drawer.Screen
        name="MealFavs"
        component={MealsFavTabNavigator}
        options={{
          drawerLabel: "Meals",
        }}
      />
      <Drawer.Screen name="Filters" component={FilterStackNavigator} />
    </Drawer.Navigator>
  );
}

export default MenuNavigator;
