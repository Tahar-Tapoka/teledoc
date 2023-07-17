import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DrProfileScreen = ({ navigation, route }) => {
  const dr = route?.params.dr;
  return (
    <View>
      <Text>DrProfileScreen</Text>
      <Text>{dr.full_name}</Text>
    </View>
  );
};

export default DrProfileScreen;

const styles = StyleSheet.create({});
