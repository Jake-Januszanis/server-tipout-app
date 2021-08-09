
import React, {useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form'
import {Text, View, Pressable, ScrollView, StyleSheet, TextInput} from 'react-native';
import { SalesContext } from '../../Context/SalesContext';

export default function SalesUpdateForm({toggleModal}) {
    
    const { salesDispatch } = useContext(SalesContext);

    const { handleSubmit, control, formState: {errors} } = useForm();
    const onSubmit = data => salesDispatch({type: 'addSales', payload: data});

    return(
        <ScrollView>
            <View style={styles.container}>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Total Sales</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="totalSales"
                    id='totalSales'
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

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Food Sales</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="foodSales"
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
                {errors.foodSales && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Liquor Sales</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="liquorSales"
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
                {errors.liquorSales && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Beer Sales</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="beerSales"
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
                {errors.beerSales && <Text style={styles.inputErrorText}>This is required.</Text>}
            </View>

            <View style={styles.inputGroup}>
            <Text style={styles.label}>Wine Sales</Text>
                <Controller
                    control={control}
                    style={styles.inputGroup}
                    rules={{required: true}}
                    name="wineSales"
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
                {errors.wineSales && <Text style={styles.inputErrorText}>This is required.</Text>}
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