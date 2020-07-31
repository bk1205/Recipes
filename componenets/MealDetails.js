import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';


function MealDetails(props) {
    return (
        <View style={styles.mealDetail}>
            <ImageBackground style={styles.bgImage} source={{uri: props.image}} >
                <Text style={styles.title} >{props.title}</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    mealDetail: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        fontSize: 18,
        fontFamily: 'open-sans-bold',

    },
    bgImage: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end",
    }
});

export default MealDetails;