/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import Header from './component/header';
import BottomSheet from '@gorhom/bottom-sheet';

const SeachAdvanced = () => {
  const [activeSections, setActiveSections] = useState<number[]>([0]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '100%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handleChange = (value: any) => {
    console.log(value)
    setActiveSections(value);
  };
  const handleHeader = (
    content: string,
    index: number,
    isActive: boolean,
    sections: any,
  ) => {
    return <Header content={content} isActive={isActive} />;
  };

  return (

    <View style={styles.container}>
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
      <View style={{width: '100%', padding: 20}}>
      <Accordion
        
        activeSections={activeSections}
        sections={['Section 1','Section 2','Section 3']}
        renderHeader={handleHeader}
        renderContent={() => <Text>123</Text>}
        onChange={handleChange}
        underlayColor="transparent"
      />
    </View>
      </View>
    </BottomSheet>
  </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SeachAdvanced;
