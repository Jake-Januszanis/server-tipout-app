
import React, {useState} from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, TextInput} from 'react-native';

export default function SalesUpdateForm() {
    const [sales, setSales] = useState();
    const [liquorSales, setLiquorSales] = useState();
    const [wineSales, setWineSales] = useState();
    const [foodSales, setFoodSales] = useState();
    const [beerSales, setBeerSales] = useState();

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Edit Sales</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Total Sales</Text>
                            <TextInput
                                autoFocus
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setSales(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Food Sales</Text>
                            <TextInput
                                style={styles.input}
                                textAlign= 'center'
                                keyboardType= 'number-pad'
                                onChangeText={text => setFoodSales(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Liquor Sales</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setLiquorSales(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Beer Sales</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setBeerSales(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Wine Sales</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setWineSales(text)}
                            />
                    </View>
                    <Pressable
                        style={styles.submitButton}
                        onPressIn={() => console.log({
                            'Total Sales': sales,
                            'Food Sales': foodSales,
                            'Liquor Sales': liquorSales,
                            'Beer Sales': beerSales,
                            'Wine Sales': wineSales
                        })}>
                        <Text style={styles.submitButtonText}>Update</Text>
                    </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 50,
    },
    title: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'center'
    },
    label: {
        fontSize: 30,
        paddingBottom: 5,
        color: '#fff',
    },
    inputGroup: {
        marginVertical: 20,
        marginHorizontal: '15%'
    },
    input: {
        borderColor: '#fff',
        backgroundColor: '#rgba(249,249,249, .2)',
        borderWidth: 1,
        color: '#fff',
        fontSize: 35,
    },
    submitButton: {
        backgroundColor: '#77DBC9',
        height: 55,
        marginHorizontal: '25%',
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 1,
 
    },
    submitButtonText: {
        fontSize: 40,
        textAlign: 'center',
    }
})