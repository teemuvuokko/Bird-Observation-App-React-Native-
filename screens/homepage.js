import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { globalStyling } from '../styles/global';

export default function Home(){
    return (
        <View style = {globalStyling.container}>
            <Text style = {globalStyling.titleText}>Home Screen</Text>
            <Button title = 'See more details' />
        </View>
    )
}
