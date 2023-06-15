import { StyleSheet } from "react-native";
import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { theme } from "../infrastructure/theme";

const SegmentedButton = ({ user, setUser }) => {
  return (
    <SegmentedButtons
      value={user}
      onValueChange={setUser}
      buttons={[
        {
          value: "Patient",
          label: "Patient",
          icon: "emoticon-sick-outline",
          checkedColor: "white",
          style: {
            ...styles.segmentBtn,
            backgroundColor:
              user === "Patient" ? theme.colors.primary : theme.colors.disabled,
          },
        },
        {
          value: "Consultant",
          label: "Consultant",
          icon: "doctor",
          checkedColor: "white",
          style: {
            ...styles.segmentBtn,
            backgroundColor:
              user === "Consultant"
                ? theme.colors.primary
                : theme.colors.disabled,
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
