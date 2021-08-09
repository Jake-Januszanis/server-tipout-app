import React, {useState, useContext}  from 'react';
import { useForm, Controller } from 'react-hook-form';
import {TextInput, View, Text, StyleSheet, Pressable, ScrollView} from 'react-native'
import { EmployeeContext } from '../../Context/EmployeeContext';

export default function NewEmployeeForm({toggleModal}) {
    const { employeeDispatch } = useContext(EmployeeContext);

    const { handleSubmit, control, setValue, formState: {errors} } = useForm();
    const onSubmit = data => employeeDispatch({type: 'addEmployee', payload: data});
    const [type, setType] = useState('')
    
      
    

   

  return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>New Employee</Text>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="employeeName"
                    id='employeeName'
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.totalSales && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Hours</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="employeeHours"
                    id='employeeHours'
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            keyboardType='number-pad'
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.totalSales && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>
            
            <View style={styles.radioGroup}>
       {/* *****Both pressable buttons use a ternery operator to determined the text style based off the value of type***** */}
                <Pressable
                    onPressIn={() => setValue('type', 'Support')}
                    onPressOut={() => setType('Support')}
                >
                <Text style={(type === 'Support') ? {...styles.radioButton, ...styles.radioButtonSelect} : styles.radioButton}>Support</Text>
                </Pressable>

                <Pressable
                    onPressIn={() => setValue('type', 'Host')}
                    onPressOut={() => setType('Host')}
                >
                <Text style={(type === 'Host') ? {...styles.radioButton, ...styles.radioButtonSelect} : styles.radioButton}>Host</Text>
            </Pressable>
        </View>
            
            <Pressable
            style={styles.submitButton}
            onPressIn={handleSubmit(onSubmit)}
            onPressOut={toggleModal}
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