
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default function EmployeeCards({ employee }) {

    return (
        <View style={styles.cards}>
                    <View  style={styles.cardTop}>
                    <Text style={styles.cardTopTitle}>{employee.employeeName}</Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Type</Text>
                            <Text style={styles.cardBottomGroupText}>{employee.type}</Text>
                        </View>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Hours</Text>
                            <Text style={styles.cardBottomGroupText}>{employee.employeeHours}</Text>
                        </View>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Tipout</Text>
                            <Text style={styles.cardBottomGroupText}>?</Text>
                        </View>
                       
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({

    cards: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginVertical: 20,
        marginHorizontal: '10%',
        height: 100,
    },
    cardTop: {
        flex: 1,
    },

    cardTopTitle:{
        fontSize: 30,
        textAlign: 'center',
    },

    cardBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    cardBottomGroupText: {
        textAlign: 'center',
        fontSize: 19,
    },
    cardBottomGroupTextCategory: {
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
    },

})