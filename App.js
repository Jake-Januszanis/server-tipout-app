import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';

export default function App() {
  return (
    <ScrollView
    style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Dashboard />
        <Employees />
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    overflow: 'scroll'
  },
});
