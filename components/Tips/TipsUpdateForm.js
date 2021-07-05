
import React, {useState} from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, TextInput} from 'react-native';

export default function TipsUpdateForm() {
    const [hours, setHours] = useState();
    const [cardTips, setCardTips] = useState();
    const [cashInHand, setCashInHand] = useState();
    const [cashOwed, setCashOwed] = useState();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Edit Tips</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Card Tips</Text>
                            <TextInput
                                autoFocus
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setCardTips(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Cash in Hand</Text>
                            <TextInput
                                style={styles.input}
                                textAlign= 'center'
                                keyboardType= 'number-pad'
                                onChangeText={text => setCashInHand(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Cash Owed</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setCashOwed(text)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Hours</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType= 'number-pad'
                                textAlign= 'center'
                                onChangeText={text => setHours(text)}
                            />
                    </View>
                    <Pressable
                        style={styles.submitButton}
                        onPressIn={() => console.log({
                            'Hours': hours,
                            'Card Tips': cardTips,
                            'Cash in Hand': cashInHand,
                            'Cash Owed': cashOwed
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
        marginTop: 20,
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