import React from "react";
import { TextInput, View , Text} from "react-native";
import styles from "../../styles";

interface TypeValueInputList {
    item: any;
    title: string;
    textArea?: boolean
}

const ValueInputList:React.FC<TypeValueInputList> = ({item, title, textArea}) => {
    return (
        <View>
        <Text style={styles.sourceProblemTitle}>{title}</Text>
        <TextInput
            value={item}
            style={[styles.inputSource, textArea == true && {height: 100}]}
            placeholderTextColor={'black'}
            multiline={textArea == true ? true : false}
            numberOfLines={textArea == true ? 9 : 1}
        />
    </View>
    )
}

export default ValueInputList;