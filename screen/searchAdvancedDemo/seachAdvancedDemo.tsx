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
import BottomSheet from '@gorhom/bottom-sheet';
import SeachAdvanced from '../../component/SearchAdvance/searchAdvanced';

const SeachAdvancedDemo = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['10%', '80%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // const handleClosePress = () => bottomSheetRef.current.close()


  return (
    <>
        <Button title="Open"  />
        <SeachAdvanced/>
    </>


    // <View style={styles.container}>
    //   <BottomSheet
    //     enablePanDownToClose
    //     ref={bottomSheetRef}
    //     index={1}
    //     snapPoints={snapPoints}
    //     onChange={handleSheetChanges}>
    //     <View style={styles.contentContainer}>

    //       <Text>Awesome 1 🎉</Text>
    //     </View>
    //   </BottomSheet>
    // </View>
  );
};

const styles = StyleSheet.create({

});

export default SeachAdvancedDemo;
