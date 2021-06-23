
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Button } from 'react-native';

export default function Employees() {

    const data = [
        {
            name: 'Tucker',
            type: 'support',
            hours: 7.5,
            tipout: '$24.00'
        },
        {
            name: 'Chris',
            type: 'support',
            hours: 7.5,
            tipout: '$24.00'
        },
        // {
        //     name: 'Shane',
        //     type: 'support',
        //     hours: 6.5,
        //     tipout: '$18.00'
        // },
        // {
        //     name: 'Justin',
        //     type: 'support',
        //     hours: 6.5,
        //     tipout: '$18.00'
        // },
        // {
        //     name: 'Casey',
        //     type: 'host',
        //     hours: 6.5,
        //     tipout: '$7.00'
        // },
        // {
        //     name: 'Sam',
        //     type: 'host',
        //     hours: 6.5,
        //     tipout: '$7.00'
        // }
    ]


    return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.title}>Employees</Text>
            <FlatList
                data={data}
                nestedScrollEnabled
                renderItem = {({ item }) => (

                <View style={styles.card}>
                    <View  style={styles.cardTop}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Type</Text>
                            <Text style={styles.cardBottomGroupText}>{item.type}</Text>
                        </View>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Hours</Text>
                            <Text style={styles.cardBottomGroupText}>{item.hours}</Text>
                        </View>
                        <View style={styles.cardBottomGroup}>
                            <Text style={styles.cardBottomGroupTextCategory}>Tipout</Text>
                            <Text style={styles.cardBottomGroupText}>{item.tipout}</Text>
                        </View>
                       
                    </View>
                </View>
            )}/>
            <Button 
            title="Add Employee"
            color='#77DBC9' 
            ></Button>
        </SafeAreaView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        marginBottom: 50
    },

    card: {
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


    cardTitle:{
        fontSize: 30,
        textAlign: 'center',
        
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
    }
})