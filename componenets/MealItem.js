import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import DefaultText from "./DefaultText"

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <DefaultText>{props.duration}m</DefaultText>
          <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealItem: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    height: 200,
    padding: 15,
    margin: 2,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default MealItem;
