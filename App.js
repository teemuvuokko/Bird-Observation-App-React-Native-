import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { globalStyling } from './styles/global';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
