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
import {createStackNavigator} from '@react-navigation/stack';
import ProblemArisingAdd from './screen/problemArising-add/ProblemArisingAdd';

const Stack = createStackNavigator();

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const ConvertSearchScreenLayout = () => MasterLayout(SearchScreen());
  const ConvertAddNewDiaryScreenLayout = () =>
    MasterLayout(AddNewDiaryScreen());
  const ConvertSeachAdvancedLayout = () => MasterLayout(SeachAdvancedDemo());

  const ConvertManageDoanLayout = () => MasterLayout(ManageDoan());

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProblemArising" component={ProblemArising} />
        <Stack.Screen name="ProblemArisingAdd" component={ProblemArisingAdd} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Manage Doan" component={ConvertManageDoanLayout} />
        <Tab.Screen name="ProblemArising" component={ProblemArising} />
      </Tab.Navigator> */}
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
