import { StyleSheet, Text, View } from "react-native";
import { RowContainer } from "../infrastructure/theme";
import { Avatar } from "react-native-paper";

const StaffContainer = ({ txt, logo }) => {
  return (
    <RowContainer style={{ flexWrap: "wrap", width: "50%" }}>
      <Avatar.Image size={100} source={logo} />
      <Text style={{ padding: 10 }}>{txt}</Text>
    </RowContainer>
  );
};

export default StaffContainer;

const styles = StyleSheet.create({});
