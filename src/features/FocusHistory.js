import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={style.title}>Nui nimic!</Text>;

  const renderItem = ({ item }) => <Text style={style.item}>- {item}</Text>;

  return (
    <View style={style.container}>
      <Text style={style.title}>Accent pe:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1,
    
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSizes: fontSizes.md,
    padding: spacing.md,
  },
});
