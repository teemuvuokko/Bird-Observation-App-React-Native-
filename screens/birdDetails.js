import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { globalStyling } from '../styles/global';

export default function BirdDetails (){
    return (
        <View style= {globalStyling.container}>
            <Text style = {globalStyling.titleText}>Details of Spotted  Birds</Text>
        </View>
    )
}