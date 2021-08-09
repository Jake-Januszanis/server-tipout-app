
import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import { SalesContext } from '../../Context/SalesContext';
import { EmployeeContext } from '../../Context/EmployeeContext';
import { TipsContext } from '../../Context/TipsContext';


export default function DailyReportModal({isOpen, toggleModal}) {

    const { employees } = useContext(EmployeeContext);
    const { salesState } = useContext(SalesContext);
    const { tipsState } = useContext(TipsContext);
    
    useEffect(() => {
        console.log('State Updated')
        console.log(tipsState)
    }, [tipsState])

    return (
        <View>
            <Modal
            animationType='slide'
            visible={isOpen}>
            <View style={styles.container}>
                <Text>Daily Report Modal</Text>
                <View>
                    <Text style={styles.colorWhite}>Total Tips:</Text>
                    <Text style={styles.colorWhite}>{(tipsState[0 ] === undefined) ? 'N/A' : tipsState[0].value}</Text>
                </View>
                <Button 
                title='Close Modal'
                onPress={toggleModal}
                />
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

    colorWhite: {
        color: '#fff'
    }
})