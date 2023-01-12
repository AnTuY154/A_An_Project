/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import Header from './component/header';

const SeachAdvanced = () => {
  const [activeSections, setActiveSections] = useState<number[]>([0]);

  const handleChange = (value: any) => {
    setActiveSections(value);
  };
  const handleHeader = (
    content: string,
    index: any,
    isActive: any,
    sections: any,
  ) => {
    return <Header content={content} isActive={isActive} />;
  };
  return (
    <View style={{width: '100%', padding: 20}}>
      <Accordion
        activeSections={activeSections}
        sections={['Section 1']}
        renderHeader={handleHeader}
        renderContent={() => <Text>123</Text>}
        onChange={handleChange}
        underlayColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen_container: {},
});

export default SeachAdvanced;
