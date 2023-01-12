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
import SeachAdvanced from './screen/searchAdvanced/seachAdvanced';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const ConvertSearchScreenLayout = () => MasterLayout(SearchScreen());
  const ConvertAddNewDiaryScreenLayout = () =>
    MasterLayout(AddNewDiaryScreen());
  const ConvertSeachAdvancedLayout = () => MasterLayout(SeachAdvanced());
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Search Advanced"
          component={ConvertSeachAdvancedLayout}
        />
        <Tab.Screen name="Diary" component={ConvertAddNewDiaryScreenLayout} />
        <Tab.Screen name="Home" component={ConvertSearchScreenLayout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
