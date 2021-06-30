
import React from 'react';
import {View, Text, StyleSheet, Modal, Button } from 'react-native';


export default function SalesUpdateModal({isOpen, setToggle}) {

    const toggleModal = () => {
        setToggle(!isOpen)
    }

    return (
    <View style={styles.container}>
        <Modal
        animationType='slide'
        visable={isOpen}>
            <Text>Update Sales Modal</Text>
            <Text>{isOpen}</Text>
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