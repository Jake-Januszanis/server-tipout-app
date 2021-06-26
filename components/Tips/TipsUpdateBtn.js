
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TipsUpdateBtn() {


    return (
            <View style={styles.btn}>
            <Button 
                title='Update Tips'
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