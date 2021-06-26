
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function DailyReportButton() {

    return(
        <View style={styles.container}>
        <View style={styles.button}>
            <Button
                title='View Daily Report'
                color='#77DBC9'
                accessibilityLabel='Click this button to view daily report'
                onPress={() => alert("Daily Report Button Pressed")}
                />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ECECEC',
        paddingBottom: 60
    },
    button: {
        marginHorizontal: '15%',
    }
})