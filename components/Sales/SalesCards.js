
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function SalesCards() {

    const data = [
        {
            title: 'Liqour Sales',
            value: '$1,212',
            id: '1'
        },
        {
            title: 'Food Sales',
            value: '$442.00',
            id: '2'
        },
        {
            title: 'Hours',
            value: 6.5,
            id: '3'
        },
    ]


    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <View style={styles.card}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={styles.text}>{item.value}</Text>
                    </View>
                }}/>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        height: '85%',
        width: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
    }
})