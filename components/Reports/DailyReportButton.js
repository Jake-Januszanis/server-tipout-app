
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DailyReportModal from './DailyReportModal';

export default function DailyReportButton() {
    const [isOpen, setToggle] = useState(false)

    return(
        <View>
        <View style={styles.container}>
        <View style={styles.button}>
            <Button
                title='View Daily Report'
                color='#77DBC9'
                accessibilityLabel='Click this button to view daily report'
                onPress={() => setToggle(true)}
                />
        </View>
        </View>
        {isOpen ? <DailyReportModal isOpen={isOpen} setToggle={setToggle} /> : null}
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