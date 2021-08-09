
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TipsContext } from '../../Context/TipsContext';
import TipsUpdateBtn from './TipsUpdateBtn';

export default function TipDataCards() {
    const { tipsState } = useContext(TipsContext)
   
    return (
        <View style={styles.container}>
            <FlatList 
            data={tipsState}
            horizontal
            nestedScrollEnabled
            keyExtractor={(item) => item.key.toString()}
            ListEmptyComponent={<TipsUpdateBtn />}
            renderItem = {({ item }) => (
                        <View style={styles.cards} key={item.key.toString()}>
                            <Text style={styles.text}>{item.title}</Text>
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