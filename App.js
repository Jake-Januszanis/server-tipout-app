import { StatusBar } from 'expo-status-bar';
import React, {useReducer} from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header';
import  Dashboard  from './components/Dashboard';
import  Employees  from './components/Employees/Employees';
import  DailyReportButton  from './components/Reports/DailyReportButton';

import { TipsReducer } from './reducers/TipsReducer';
import { SalesReducer } from './reducers/SalesReducer';
import { EmployeeReducer } from './reducers/EmployeeReducer';

import { SalesContext } from './Context/SalesContext';
import { TipsContext } from './Context/TipsContext';
import { EmployeeContext } from './Context/EmployeeContext';



const initialTipsState = [
    // { title: 'Card Tips', type:'tips', value: 0, key: 1},
]

const initialSalesState = [
  // { title: "Total Sales", type:'sales', value: 0, key: 1 },
]

const initialEmployees = []
 
export default function App() {
  const [tipsState, tipsDispatch] = useReducer(TipsReducer, initialTipsState)
  const [salesState, salesDispatch] = useReducer(SalesReducer, initialSalesState)
  const [employees, employeeDispatch] = useReducer(EmployeeReducer, initialEmployees)

  return (
    <ScrollView
    style={styles.container}>
      <TipsContext.Provider
        value={{tipsState, tipsDispatch}}>
          <SalesContext.Provider
            value={{salesState, salesDispatch}}>
              <EmployeeContext.Provider
                value={{employees, employeeDispatch}}>
                <StatusBar style="auto" />
                <Header />
                <Dashboard />
                <Employees />
                <DailyReportButton />
              </EmployeeContext.Provider>
          </SalesContext.Provider>
      </TipsContext.Provider>
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
