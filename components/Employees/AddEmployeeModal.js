
import React from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';

export default function AddEmployeeModal({isOpen, toggleModal}) {


    return(

        <View>
            <Modal
            animationType='fade'
            visible={isOpen}
            >
                <Text>Add Employee Modal</Text>
                    <Button
                    title='Close Modal'
                    accessibilityLabel='Click to close modal'
                    onPress={toggleModal}
                    />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

})