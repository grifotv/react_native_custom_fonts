import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={[styles.text, { fontFamily: 'Dosis-ExtraLight' }]}>
          Dosis-ExtraLight
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-Light' }]}>
          Dosis-Light
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-Regular' }]}>
          Dosis-Regular
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-Medium' }]}>
          Dosis-Medium
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-SemiBold' }]}>
          Dosis-SemiBold
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-Bold' }]}>
          Dosis-Bold
        </Text>
        <Text style={[styles.text, { fontFamily: 'Dosis-ExtraBold' }]}>
          Dosis-ExtraBold
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 30,
    color: 'black',
  }
});

export default App;
