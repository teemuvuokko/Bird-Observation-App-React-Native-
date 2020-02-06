import React, { useState} from 'react';
import {
    View, Text, StyleSheet, Modal, FlatList, TouchableOpacity,
    TouchableWithoutFeedback, Keyboard
} from "react-native";
import { globalStyling } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ObservationForm from '../screens/addObservationForm';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false); // React hook for opening the addObservation model.

    const [birds, setBirds] = useState([ // Hook for the bird objects
        { title: 'White-tailed eagle', rarity: 'rare', notes: 'Spotted at Turku', key: '1' },
    ]);

 
    // Add new observation to the list and close the modal
    const addObservation = (bird) => {
        key = Date.now.toString();
        setBirds((currentBirds) => {
            return [bird, ...currentBirds]
        });
        setModalOpen(false);
    }
    

    return (
        <View style={globalStyling.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={styles.modalToggle}
                            onPress={() => {
                                setModalOpen(false)
                            }} />
                        <ObservationForm addObservation={addObservation} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                onPress={() => {
                    setModalOpen(true)
                }} />

            <FlatList data={birds} renderItem={({ item }) => ( // Render data from bird-hook
                <TouchableOpacity>
                    <Card>
                        <Text style={globalStyling.titleText}>Species: {item.title} {"\n"}Rarity: {item.rarity}{"\n"}Notes: {item.notes}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});
