
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function TipDataCards() {

    const tipData = [
        {
            name: 'Total Tips',
            value: '$381.64'
        },
        {
            name: 'Card Tips',
            value: '$362.11'
        },
        {
            name: 'Cash',
            value: '$50.00'
        },{
            name: 'Cash Owed',
            value: '$30.47'
        },{
            name: 'Cash Tips',
            value: '$19.53'
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList 
            data={tipData}
            horizontal
            nestedScrollEnabled
            renderItem = {({ item }) => (
                        <View style={styles.cards}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.value}</Text>
                        </View>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        height: '85%',
        width: 150,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        fontSize: 25
    }

})