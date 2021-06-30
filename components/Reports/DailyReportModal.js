
import React from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';


export default function DailyReportModal({isOpen, setToggle}) {


    return (
        <View>
            <Modal
            animationType='slide'
            visible={isOpen}>
                <Text>Daily Report Modal</Text>
                <Button 
                title='Close Modal'
                onPress={() => setToggle(false)}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})