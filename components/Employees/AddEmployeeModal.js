
import React from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';

export default function AddEmployeeModal({isOpen, setToggle}) {

    return(

        <View style={styles.container}>
            <Modal
            animationType='fade'
            visible={isOpen}
            >
                <Text>Add Employee Modal</Text>
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