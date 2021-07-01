
import React from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';


export default function TipsUpdateModal({isOpen, toggleModal}) {


    return(
        <View>
            <Modal
            visible={isOpen}
            animationType='slide'
            >
                <Text>Tips Update Modal</Text>
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