import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import {spacing} from "../utils/sizes"
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.TextInput}
        onChangeText={setSubject} label="Ce vreai sa faci?" />
        <View style={styles.button}>
        <RoundedButton  title="+" size={50} onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
  },
  button:{
    justifyContent:'center',

  },
  TextInput:{
    flex:1,
    marginRight: spacing.sm,
   
    
  },

  inputContainer: {
  
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
