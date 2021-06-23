
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SalesUpdateBtn() {


    return (
        <View style={styles.btn}>
            <Button 
                title='Update Sales'
                color='#77DBC9'
                />
                </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})