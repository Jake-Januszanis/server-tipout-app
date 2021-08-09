
import React, { useContext } from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, TextInput, Button} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { TipsContext } from '../../Context/TipsContext';


export default function TipsUpdateForm({toggleModal}) {
    const { tipsDispatch } = useContext(TipsContext);

    const { handleSubmit, control, formState: {errors} } = useForm();
    const onSubmit = data => {
        tipsDispatch({type: 'addTips', payload: data})
        }
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.inputGroup}>
            <Text style={styles.label}>Card Tips</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="cardTips"
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
                {errors.cardTips && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>
            <View style={styles.inputGroup}>
            <Text style={styles.label}>Cash in Hand</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="cashInHand"
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
                {errors.cashInHand && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>
            <View style={styles.inputGroup}>
            <Text style={styles.label}>Cash Owed</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="cashOwed"
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
                {errors.cashOwed && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Hours</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="hours"
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
                {errors.hours && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>
                <Pressable
                    style={styles.submitButton}
                    onPressIn={handleSubmit(onSubmit)}
                    onPressOut={toggleModal}>
                        <Text style={styles.submitButtonText}>Submit</Text>
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
    inputErrorText: {
        color: 'red'
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