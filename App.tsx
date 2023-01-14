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
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import SearchScreen from './screen/searchScreen/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddNewDiaryScreen from './screen/addNewDiary/AddNewDiary';
import MasterLayout from './screen/masterLayout/MasterLayout';
import SeachAdvancedDemo from './screen/searchAdvancedDemo/seachAdvancedDemo';
import ManageGroup from './screen/manageGroup/manageGroup';
import ProblemArising from './screen/poblemArising/ProblemArising';
import { createStackNavigator } from '@react-navigation/stack';
import ProblemArisingAdd from './screen/problemArising-add/ProblemArisingAdd';

const Stack = createStackNavigator();
import SeachAdvanced from './component/SearchAdvance/searchAdvanced';
import ManageGroupDetail from './screen/manageGroupDetail/manageGroupDetail';
import Home from './screen/homeScreen/homeScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // const ConvertManageGroupLayout = () => MasterLayout(ManageGroupStack());
  // const ConvertManageGroupDetailLayout = () => MasterLayout(ManageGroupDetail());

  // const ConvertProblemArisingLayout = () => MasterLayout(ProblemArising());

  const ConvertManageGroupLayout: any = MasterLayout(() => <ManageGroup />);
  const ConvertManageGroupDetailLayout: any = MasterLayout((props) => <ManageGroupDetail {...props} />
  );

  // function MyStack() {
  //   return (
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="ProblemArising" component={ProblemArising} />
  //       <Stack.Screen name="ProblemArisingAdd" component={ProblemArisingAdd} />
  //     </Stack.Navigator>
  //   );
  // }

  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="ProblemArising" component={ConvertProblemArisingLayout} /> */}
        <Stack.Screen
          name="ManageGroupList"
          component={ConvertManageGroupLayout}
        />
        <Stack.Screen
          name="ManageGroupDetail"
          component={ConvertManageGroupDetailLayout}
        />
        {/* <Stack.Screen name="ManageGroup" component={ConvertManageGroupLayout} /> */}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <HomeStack />
      {/* <GroupStack /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
