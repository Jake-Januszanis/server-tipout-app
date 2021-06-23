
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrentDate from './CurrentDate';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {


    
    return(
    
        
        <View style={styles.container}>
            <LinearGradient
                colors={['#77DBC9', 'transparent']}
                style={styles.background}
            >
            <View style={styles.container}>
            <Text style={styles.title}>Recess Tip Log</Text>
            <CurrentDate />
            <Text style={styles.text}>Total Sales:</Text>
            <Text style={styles.totalDisplay}>$1,654.50</Text>
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