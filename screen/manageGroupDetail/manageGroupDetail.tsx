/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, SafeAreaView, View, Text, Button, ScrollView} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import BottomSheet from '@gorhom/bottom-sheet';
import AccordionHeader from './component/accordionHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import GroupInfoContent from './component/groupInfoContent';

export interface SectionsType {
  label: string;
  icon: string;
  id: string
}

const ManageGroupDetail = () => {
  const [activeSections, setActiveSections] = useState<number[]>([0]);

  const sections: SectionsType[] = useMemo(() => {
    return [
      {
        id:'1',
        icon: 'group_info',
        label: 'Thông tin Đoàn TT, Ktr, KT',
      },
      {
        id:'2',
        icon: 'group_member',
        label: 'Thành viên Đoàn',
      },
      {   
        id:'3',
        icon: 'group_object',
        label: 'Đối tượng TT, KTr, KT',
      },
      {
        id:'4',
        icon: 'group_problem',
        label: 'Nguồn gốc vấn đề',
      },
    ];
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleChange = (value: any) => {
    console.log(value);
    setActiveSections(value);
  };

  const handleBack = () => {
    console.log('Back');
  };

  const handleHeader = (
    content: SectionsType,
    index: number,
    isActive: boolean,
    sections: SectionsType[],
  ) => {
    return <AccordionHeader content={content} isActive={isActive} />;
  };

  const renderContent = (content:SectionsType, index:number, isActive:boolean, sections:SectionsType[]) => {
      if(content.id === '1'){
        return <GroupInfoContent isActive={isActive}/>
      }
      return <Text>123</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo
          onPress={handleBack}
          style={styles.back_icon}
          name="chevron-left"
          size={24}
          color="black"
        />

        <Text style={styles.header_text}>Chi tiết Đoàn</Text>
      </View>
      <ScrollView style={styles.body}>
        <Accordion
          activeSections={activeSections}
          sections={sections}
          renderHeader={handleHeader}
          renderContent={renderContent}
          onChange={handleChange}
          underlayColor="transparent"
          expandMultiple
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F5FB',

  },
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

  },
  back_icon: {
    position: 'absolute',
    left: 15,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white'
  },
  body: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#F6F5FB',
    paddingHorizontal: 20,
  },
});

export default ManageGroupDetail;