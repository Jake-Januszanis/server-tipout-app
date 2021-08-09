
import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import TipsUpdateForm from './TipsUpdateForm';


export default function TipsUpdateModal({isOpen, toggleModal}) {


    return(
        <View>
            <Modal
            visible={isOpen}
            animationType='slide'
            >
            <View style={styles.container}>
                <Pressable
                    style={styles.modalButton}
                    onPressIn={toggleModal}
                >
                <Text style={styles.modalButtonText}>[Close]</Text>
                </Pressable>
                <TipsUpdateForm toggleModal={toggleModal}/>
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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