
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TipsUpdateModal from './TipsUpdateModal';

export default function TipsUpdateBtn() {

    const [isOpen, setToggle] = useState(false)

    return (
        <View>
            <View style={styles.btn}>
            <Button 
                title='Update Tips'
                color='#77DBC9'
                onPress={() => setToggle(true)}
                />
            </View>
            {isOpen ? <TipsUpdateModal isOpen={isOpen} setToggle={setToggle} />: null}
            </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})