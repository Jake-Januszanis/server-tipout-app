
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrentDate from './Utility/CurrentDate';
import { LinearGradient } from 'expo-linear-gradient';
import { SalesContext } from '../Context/SalesContext';

export default function Header() {
    const { salesState } = useContext(SalesContext);


   let totalSales = salesState.find(item => item.title === 'Total Sales')

    return(
        <View>
            <LinearGradient
                colors={['#77DBC9', 'transparent']}
                style={styles.background}
            >
            <View style={styles.container}>
                <Text style={styles.title}>Recess Tip Log</Text>
                <CurrentDate />
                <Text style={styles.text}>Total Sales:</Text>
                {(totalSales !== undefined) ? <Text style={styles.totalDisplay}>${totalSales.value}</Text> : <Text style={styles.totalDisplay}>$0</Text>}
            </View>
            </LinearGradient>
            </View>
            
            
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        height: 300,
        width: '100%',
    },
    title: {
        marginTop: 30,
        fontSize: 50,
    },
    text: {
        fontSize: 25,
        color: 'gray',
    },
    totalDisplay: {
        fontSize: 45,
    }
  });