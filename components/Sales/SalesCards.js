
import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { SalesContext } from '../../Context/SalesContext';
import SalesUpdateBtn from './SalesUpdateBtn'

export default function SalesCards() {
    const { salesState } = useContext(SalesContext)
    

    return (
        <View style={styles.container}>
            <FlatList
                data={salesState}
                horizontal
                keyExtractor={(item) => item.key.toString()}
                ListEmptyComponent={<SalesUpdateBtn />}
                renderItem={({ item }) => {
                    return <View style={styles.card} key={item.key}>
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