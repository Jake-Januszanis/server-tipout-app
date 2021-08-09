
import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import DailyReportModal from './DailyReportModal';

export default function DailyReportButton() {
    const [isOpen, setToggle] = useState(false)

    const toggleModal = () => {
        setToggle(!isOpen)
    }

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                    title='View Daily Report'
                    color='#77DBC9'
                    accessibilityLabel='Click this button to view daily report'
                    onPress={toggleModal}
                    />
                </View>
            </View>

            {/* When isOpen is set to true Modal will be displayed */}
            <DailyReportModal isOpen={isOpen} toggleModal={toggleModal} />
            
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