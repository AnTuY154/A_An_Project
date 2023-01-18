import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import GroupTabProblem from './groupTabProblem';
import GroupTabGroupProblem from './groupTabGroupProblem';
import {styles as commonStyles} from '../styles';

interface GroupObjectContentType {
  isActive: boolean;
}

export interface ProblemDataType {
  id: string;
  content: string;
  source: string;
  unit: string;
  branch: string;
  status: string;
}

export interface GroupProblemDataType {
  id: string;
  name: string;
  branch: string;
  note: string;
}

function GroupProblemContent({isActive}: GroupObjectContentType) {
  const [tab, setTab] = useState<number>(1);
  const [problem, setProblem] = useState<ProblemDataType[]>([]);

  const [groupProblem, setGroupProblem] = useState<GroupProblemDataType[]>([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setProblem([
      {
        id: '1',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'pending',
      },
      {
        id: '2',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'done',
      },
      {
        id: '3',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'done',
      },
      {
        id: '4',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'done',
      },
      {
        id: '5',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'done',
      },
      {
        id: '6',
        content: 'Báo cáo doanh thu',
        source: 'VietelFamily',
        unit: 'VTFamily',
        branch: 'Hành chính công',
        status: 'done',
      },
    ]);

    setGroupProblem([
      {
        id: '1',
        name: 'Vấn đề về quy định hành chính',
        branch: 'BU01',
        note: 'Cần đánh giá thêm',
      },
      {
        id: '2',
        name: 'Vấn đề về quy định hành chính',
        branch: 'BU01',
        note: 'Cần đánh giá thêm',
      },
    ]);
  }, []);

  const handleChangeTab = (changeTab: number) => {
    if (changeTab === 2) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    setTab(changeTab);
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => handleChangeTab(1)}>
          <View style={styles.tab}>
            <Text
              style={
                tab === 1 ? styles.tab_text_active : styles.tab_text_inactive
              }>
              Vấn đề
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleChangeTab(2)}>
          <View style={styles.tab}>
            <Text
              style={
                tab === 2 ? styles.tab_text_active : styles.tab_text_inactive
              }>
              Nhóm vấn đề
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.active_tab_bottom,
            {
              // Bind opacity to animated value
              left: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '50%'],
              }),
            },
          ]}
        />
      </View>

      <ScrollView style={styles.content}>
        {tab === 1 && <GroupTabProblem data={problem} />}
        {tab === 2 && <GroupTabGroupProblem data={groupProblem} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
  },
  active_tab_bottom: {
    height: 5,
    borderRadius: 16,
    width: '50%',
    backgroundColor: '#1160AB',
    position: 'absolute',
    bottom: 0,
  },
  inactive_tab: {
    height: 5,
    borderRadius: 16,
    width: '100%',
  },
  active_tab: {
    backgroundColor: '#1160AB',
  },
  tab: {
    flexBasis: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  tab_text_active: {
    color: '#1160AB',
    fontSize: 18,
  },
  tab_text_inactive: {
    color: '#CFCFCF',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    position: 'relative',
  },
});

export default GroupProblemContent;
