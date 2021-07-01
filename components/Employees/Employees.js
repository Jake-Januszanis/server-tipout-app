
import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Button} from 'react-native';
import AddEmployeeModal from './AddEmployeeModal';
import EmployeeCards from './EmployeeCards';

export default function Employees() {

    const [isOpen, setToggle] = useState(false)

    const toggleModal = () => {
        setToggle(!isOpen)
    }

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
        {
            name: 'Shane',
            type: 'support',
            hours: 6.5,
            tipout: '$18.00'
        },
        {
            name: 'Justin',
            type: 'support',
            hours: 6.5,
            tipout: '$18.00'
        },
        {
            name: 'Casey',
            type: 'host',
            hours: 6.5,
            tipout: '$7.00'
        },
        {
            name: 'Sam',
            type: 'host',
            hours: 6.5,
            tipout: '$7.00'
        }
    ]


    return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.title}>Employees</Text>
                <FlatList
                    data={data}
                    renderItem = {({ item }) => (
                    <EmployeeCards item={item} />
                    )}/>
            <View style={styles.addBtn}>
                <Button 
                title="Add Employee"
                color='#77DBC9'
                accessibilityLabel='Add new employee with this button'
                onPress={toggleModal}
                ></Button>
            </View>
        </SafeAreaView>
        <AddEmployeeModal isOpen={isOpen} toggleModal={toggleModal}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        paddingBottom: 20
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
    },
    addBtn: {
        marginHorizontal: '30%',
        marginVertical: '5%'
    }
})