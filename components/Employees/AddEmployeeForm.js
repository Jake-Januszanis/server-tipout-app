import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Pressable, Button, ScrollView} from 'react-native'

export default function NewEmployeeForm() {
    const [name, setName] = useState('')
    const [hours, setHours] = useState()
    const [type, setType] = useState('')

  return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>New Employee</Text>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    autoFocus
                    style={styles.input}
                    textAlign= 'center'
                    onChangeText={text => setName(text)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Hours:</Text>
                    <TextInput
                        style={styles.input}
                        textAlign= 'center'
                        keyboardType= 'number-pad'
                        onChangeText={text => setHours(text)}
                     />
            </View>
    {/* ***Created modified radio buttons using Pressable. Notes:
    -OnPress will set state 
    -Used ternery operator to update text styles based on user selection
    (Ex: (type === 'support') ? {...styles.radio, ...styles.radioSelect} : styles.radio}) */}

        <View style={styles.inputGroup}>
                <View style={styles.radioGroup}>
                    <Pressable
                        onPressIn={() => setType('support')}
                    >
                    <Text style={(type === 'support') ? {...styles.radioButton, ...styles.radioButtonSelect} : styles.radioButton}>Support</Text>
                    </Pressable>

                    <Pressable
                        onPressIn={() => setType('host')}
                    >
                    <Text style={(type === 'host') ? {...styles.radioButton, ...styles.radioButtonSelect} : styles.radioButton}>Host</Text>
                    </Pressable>
                </View>
        </View>
        <Pressable
            style={styles.submitButton}
            onPressIn={() => console.log({
                'Name': name,
                'Type': type,
                'Hours': hours,
            })}
        >
        <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 20,
    },
    label: {
        fontSize: 30,
        paddingBottom: 10,
        color: '#fff',
    },
    inputGroup: {
        marginVertical: 30,
        marginHorizontal: '15%'
    },
    input: {
        borderColor: '#fff',
        backgroundColor: '#rgba(249,249,249, .2)',
        borderWidth: 1,
        color: '#fff',
        fontSize: 35,
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    radioButton: {
        color: '#fff',
        fontSize: 30,
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        width: 150,
        marginHorizontal: 15
    },
    radioButtonSelect: {
        borderColor: '#77DBC9',
        transform: [{scale: 1.2}]
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


