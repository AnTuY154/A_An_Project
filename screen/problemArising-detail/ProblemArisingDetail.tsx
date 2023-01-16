import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ValueInputList from "./components/valueInput-list/ValueInputList";
import AntDesign from "react-native-vector-icons/AntDesign";
import CheckBox from "@react-native-community/checkbox";

const ProblemArisingDetail = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    const [openList, setOpenList] = useState<boolean>(false);


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Ionicons
                    name="chevron-back-outline"
                    size={23}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ fontSize: 15, color: 'black' }}>
                    Chi tiết vấn đề phát sinh
                </Text>
                <Text> </Text>
            </View>
            <View style={{ width: '100%', height: '100%', paddingHorizontal: 10 }}>
                <ValueInputList item={item.sourceProblem} title='Nguồn vấn đề' />
                <ValueInputList item={item.typeProblem} title='Loại vấn đề' />
                <View style={styles.containerCheckbox}>
                    <TouchableOpacity
                        style={styles.checkboxTop}
                        onPress={() => setOpenList(!openList)}>
                        {openList ? (
                            <AntDesign name="up" />
                        ) : (
                            <AntDesign name="down" />
                        )}

                        <Text style={styles.titleCheckbox}>
                            Đơn vị phát sinh vấn đề
                        </Text>
                    </TouchableOpacity>
                </View>

                {
                    openList && <View style={styles.containerList}>
                        <FlatList
                            data={item.unitProblem}
                            nestedScrollEnabled
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.blockCheckbox}>
                                        <CheckBox
                                            disabled={false}
                                            value={true}
                                        // onChange={data => handleCheckbox(index)}
                                        />
                                        <Text style={{ color: '#2F2F2F' }}>{item.name}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>

                }


                <ValueInputList item={item.title} title='Tiêu đề' />
                <ValueInputList item={item.job} title='Về việc' />
                <ValueInputList item={item.field} title='Lĩnh vực*' />
                <ValueInputList item={item.content} title='Nội dung' textArea= {true} />

                <View>
                  <Text style={styles.sourceProblemTitle}>Thêm ảnh</Text>
                 
                </View>
            </View>
        </View>
        </ScrollView>
    )
}



export default ProblemArisingDetail;    