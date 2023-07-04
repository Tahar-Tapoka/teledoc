import { StyleSheet } from "react-native";
import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { theme } from "../infrastructure/theme";

const SegmentedButton = ({ user, setUser, value1, value2, icon1, icon2 }) => {
  return (
    <SegmentedButtons
      value={user}
      onValueChange={setUser}
      buttons={[
        {
          value: value1,
          label: value1,
          icon: icon1,
          checkedColor: "white",
          style: {
            ...styles.segmentBtn,
            backgroundColor:
              user === value1 ? theme.colors.accent : theme.colors.disabled,
          },
        },
        {
          value: value2,
          label: value2,
          icon: icon2,
          checkedColor: "white",
          style: {
            ...styles.segmentBtn,
            backgroundColor:
              user === value2 ? theme.colors.primary : theme.colors.disabled,
          },
        },
      ]}
    />
  );
};

export default SegmentedButton;

const styles = StyleSheet.create({
  segmentBtn: {
    borderWidth: 0,
    backgroundColor: theme.colors.background,
    elevation: 5,
    marginTop: theme.space[3],
  },
});
