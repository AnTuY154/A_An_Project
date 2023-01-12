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
  // const [activeSections, setActiveSections] = useState<number[]>([0]);

  // const handleChange = (value: any) => {
  //   setActiveSections(value);
  // };
  // const handleHeader = (
  //   content: string,
  //   index: any,
  //   isActive: any,
  //   sections: any,
  // ) => {
  //   return <Header content={content} isActive={isActive} />;
  // };
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (

    <View style={styles.container}>
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  </View>

    // <View style={{width: '100%', padding: 20}}>
    //   <Accordion
    //     activeSections={activeSections}
    //     sections={['Section 1']}
    //     renderHeader={handleHeader}
    //     renderContent={() => <Text>123</Text>}
    //     onChange={handleChange}
    //     underlayColor="transparent"
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SeachAdvanced;
