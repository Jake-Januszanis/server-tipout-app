
import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import NewEmployeeForm from './AddEmployeeForm';

export default function AddEmployeeModal({isOpen, toggleModal}) {


    return(

    <View>
        <Modal
        animationType='fade'
        visible={isOpen}
        >
            <View style={styles.container}>
                    <Pressable
                        style={styles.modalButton}
                        onPressIn={toggleModal}>
                            <Text style={styles.modalButtonText}>[Close]</Text>
                    </Pressable>
                <NewEmployeeForm />
            </View>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: '#fff',
    },
    modalButton: {
        width: '25%',
    },
    modalButtonText: {
        fontSize: 30,
        color: '#fff'
    }
})