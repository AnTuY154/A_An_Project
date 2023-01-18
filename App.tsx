/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const GroupStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

import SeachAdvanced from './component/SearchAdvance/searchAdvanced';
import ManageGroupDetail from './screen/manageGroupDetail/manageGroupDetail';
import SwipList from './screen/swip-list/SwipList';
import Home from './screen/homeScreen/homeScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // const ConvertManageGroupLayout = () => MasterLayout(ManageGroupStack());
  // const ConvertManageGroupDetailLayout = () => MasterLayout(ManageGroupDetail());

  // const ConvertProblemArisingLayout = () => MasterLayout(ProblemArising());

  const ConvertManageGroupLayout: any = MasterLayout(() => <ManageGroup />);
  const ConvertManageGroupDetailLayout: any = MasterLayout(props => (
    <ManageGroupDetail {...props} />
  ));

  function MyStackNavigator() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SwipList" component={SwipList} /> */}

        <Stack.Screen name="ProblemArising" component={ProblemArising} />
        <Stack.Screen name="ProblemArisingAdd" component={ProblemArisingAdd} />
        <Stack.Screen
          name="ProblemArisingDetail"
          component={ProblemArisingDetail}
        />
      </Stack.Navigator>
    );
  }

  const GroupStackNavigator = () => {
    return (
      <GroupStack.Navigator screenOptions={{headerShown: false}}>
        <GroupStack.Screen
          name="ManageGroupList"
          component={ConvertManageGroupLayout}
        />
        <GroupStack.Screen
          name="ManageGroupDetail"
          component={ConvertManageGroupDetailLayout}
        />
      </GroupStack.Navigator>
    );
  };

  const HomeStackNavigator = () => {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="ManageGroup" component={GroupStackNavigator} />
        <HomeStack.Screen name="MyStack" component={MyStackNavigator} />
      </HomeStack.Navigator>
    );
  };

  // const RootStackNavigator = () => {
  //   return (
  //     <RootStack.Navigator>
  //       <RootStack.Screen
  //         name="HomeStackNavigator"
  //         component={HomeStackNavigator}
  //       />

  //       <RootStack.Screen name="MyStack" component={MyStack} />
  //     </RootStack.Navigator>
  //   );
  // };

  return (
    <NavigationContainer>
      <HomeStackNavigator />
      {/* <GroupStack /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
