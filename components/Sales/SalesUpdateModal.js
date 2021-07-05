
import React from 'react';
import {View, Text, StyleSheet, Modal, Button, Pressable } from 'react-native';
import SalesUpdateForm from './SalesUpdateForm';


export default function SalesUpdateModal({isOpen, toggleModal}) {


    return (
    <View>
        <Modal
        animationType='slide'
        visible={isOpen}>
        <View style={styles.container}>
            <Pressable
            style={styles.modalButton}
            onPressIn={toggleModal}
            >
            <Text style={styles.modalButtonText}>[Close]</Text>
            </Pressable>
            <SalesUpdateForm />
            </View>
        </Modal>
    </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#222'
    },
    modalButton: {
        width: '30%',
        padding: 10
    },
    modalButtonText: {
        fontSize: 30,
        color: '#fff'
    }
})