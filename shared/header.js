import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style = {styles.header}>
            <View>  
            <Text style= {styles.headerText}>Home page</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#333',
        letterSpacing: 1,
    }
})