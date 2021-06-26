
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CurrentDate() {

    let currentDate = new Date();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return(
        <View>
            <Text style={styles.text}>
                {month + 1}/{date}/{year}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        paddingVertical: 7,
    }
})