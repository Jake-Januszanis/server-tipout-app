
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SalesUpdateModal from './SalesUpdateModal';

export default function SalesUpdateBtn() {

    const [isOpen, setToggle] = useState(false)

    const toggleModal = () => {
        setToggle(!isOpen)
    };


    return (
        <View>
            <View style={styles.btn}>
                <Button 
                title='Update Sales'
                color='#77DBC9'
                onPress={toggleModal}
                />
            </View>
            {isOpen ? <SalesUpdateModal isOpen={isOpen} setToggle={setToggle} /> : null}
        </View>     
    )
}

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 10,
        marginVertical: 10,
    }
})