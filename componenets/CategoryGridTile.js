import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

function CategoryGridTile(props) {
  let TouchableCmpt = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableCmpt = TouchableNativeFeedback;
  }

  return (
    <View style={styles.categoryItem}>
      <TouchableCmpt style={{ flex: 1 }} onPress={props.onPress}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableCmpt>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 19,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});

export default CategoryGridTile;
