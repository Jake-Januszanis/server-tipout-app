
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SalesCards from './Sales/SalesCards';
import SalesUpdateBtn from './Sales/SalesUpdateBtn';
import TipDataCards from './Tips/TipDataCards';
import TipsUpdateBtn from './Tips/TipsUpdateBtn';

export default function Dashboard() {


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['transparent', '#ECECEC']}
                style={styles.background}
            >
            <Text style={styles.sectionTitles}>Sales:</Text>
                <SalesCards />
            <Text style={styles.sectionTitles}>Tips:</Text>
                <TipDataCards />
                    <View style={styles.btnContainer}>
                        <SalesUpdateBtn /> 
                        <TipsUpdateBtn />
                    </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        height: 400,
    },
    background: {
        width: '100%',
        height: 400
    },

    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionTitles: {
        fontSize: 40,
        textAlign: 'center'
    }
})