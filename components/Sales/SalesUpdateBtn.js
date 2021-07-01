
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
            
            {/* ***When isOpen is set to true Modal will be displayed */}
            <SalesUpdateModal isOpen={isOpen} toggleModal={toggleModal} />
        </View>     
    )
}

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 10,
        marginVertical: 10,
    }
})