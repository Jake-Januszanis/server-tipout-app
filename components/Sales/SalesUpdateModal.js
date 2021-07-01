
import React from 'react';
import {View, Text, StyleSheet, Modal, Button } from 'react-native';


export default function SalesUpdateModal({isOpen, toggleModal}) {


    return (
    <View>
        <Modal
        animationType='slide'
        visible={isOpen}>
            <Text>Update Sales Modal</Text>
            <Button
            title='Close Modal'
            onPress={toggleModal}
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