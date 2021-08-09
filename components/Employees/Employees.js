
import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import AddEmployeeModal from './AddEmployeeModal';
import EmployeeCards from './EmployeeCards';
import { EmployeeContext } from '../../Context/EmployeeContext';

export default function Employees() {
    const { employees } = useContext(EmployeeContext);

    const [isOpen, setToggle] = useState(false)

    const toggleModal = () => {
        setToggle(!isOpen)
    }


    return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.title}>Employees</Text>
            {employees.map((employee, index)=> {
                return <EmployeeCards key={index}employee={employee} />
            })}
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