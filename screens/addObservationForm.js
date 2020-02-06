import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, Picker, AsyncStorage} from 'react-native';
import { globalStyling } from '../styles/global.js';
import { Formik } from 'formik';

export default function ObservationForm({ addObservation }) {
    return (
        <View style={globalStyling.container}>
            <Formik
                initialValues={{ title: '', rarity: '', notes: '' }}
                onSubmit={(values, actions) => { //On submit pass the values from the fields and reset the form
                    actions.resetForm();
                    addObservation(values);
                    
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={globalStyling.input}
                            placeholder='Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                       <TextInput
                            style={globalStyling.input}
                            multiline
                            placeholder='Rarity'
                            onChangeText={props.handleChange('rarity')}
                            value={props.values.rarity}
                        />

                        <TextInput
                            style={globalStyling.input}
                            multiline
                            placeholder='Notes'
                            onChangeText={props.handleChange('notes')}
                            value={props.values.notes}
                        />

                        <Button color='maroon' title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>

    );
}