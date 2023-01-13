/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import SearchScreen from './screen/searchScreen/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddNewDiaryScreen from './screen/addNewDiary/AddNewDiary';
import MasterLayout from './screen/masterLayout/MasterLayout';
import SeachAdvancedDemo from './screen/searchAdvancedDemo/seachAdvancedDemo';
import ManageDoan from './screen/manageDoan/manageDoan';
import ProblemArising from './screen/poblemArising/ProblemArising';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const ConvertSearchScreenLayout = () => MasterLayout(SearchScreen());
  const ConvertAddNewDiaryScreenLayout = () =>
    MasterLayout(AddNewDiaryScreen());
  const ConvertSeachAdvancedLayout = () => MasterLayout(SeachAdvancedDemo());

  const ConvertManageDoanLayout = () => MasterLayout(ManageDoan());
  return (
    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Manage Doan" component={ConvertManageDoanLayout} />
        <Tab.Screen name="ProblemArising" component={ProblemArising} />
      </Tab.Navigator> */}
      <ProblemArising />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
