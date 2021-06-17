// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, Image, View } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './assets/theme.json'; // <-- Import app theme




export default function App() {
  return (

    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Layout style={styles.container}>
        <Layout style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={ require('./assets/logo.png') }
          />
        </Layout>
        <Text status='success' category='h1'>Green Home</Text>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 200,
    backgroundColor: '#fff',
    padding: 30, 
    marginBottom: 10
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'center',
  }
});
