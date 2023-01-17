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
import ManageGroup from './screen/manageGroup/manageGroup';
import ProblemArising from './screen/poblemArising/ProblemArising';
import {createStackNavigator} from '@react-navigation/stack';
import ProblemArisingAdd from './screen/problemArising-add/ProblemArisingAdd';
import ProblemArisingDetail from './screen/problemArising-detail/ProblemArisingDetail';

const Stack = createStackNavigator();
import SeachAdvanced from './component/SearchAdvance/searchAdvanced';
import ManageGroupDetail from './screen/manageGroupDetail/manageGroupDetail';
import SwipList from './screen/swip-list/SwipList';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const ConvertSearchScreenLayout = () => MasterLayout(SearchScreen());
  const ConvertAddNewDiaryScreenLayout = () =>
    MasterLayout(AddNewDiaryScreen());
  const ConvertSeachAdvancedLayout = () => MasterLayout(SeachAdvancedDemo());

  const ConvertManageDoanLayout = () => MasterLayout(ManageGroup());

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SwipList" component={SwipList} />

        <Stack.Screen name="ProblemArising" component={ProblemArising} />
        <Stack.Screen name="ProblemArisingAdd" component={ProblemArisingAdd} />
        <Stack.Screen
          name="ProblemArisingDetail"
          component={ProblemArisingDetail}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
      {/* <ManageGroupDetail /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
