/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const handleChangeScreen = (screen: string) => {
        navigation.navigate(screen as never);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleChangeScreen('ManageGroup')}>
                <Text> Quản lý đoàn</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleChangeScreen('MyStack')}>
                <Text> Vấn đề phát sinh</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

export default Home;
