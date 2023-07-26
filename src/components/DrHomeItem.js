import styled from "styled-components/native";
import { Rating } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import { fontWeights } from "../infrastructure/theme/fonts";
import { CompactDrInfo } from "./CompactDrInfo";
//refractor??
const CompactImage = styled.Image`
  border-radius: 100px;
  width: 70px;
  height: 70px;
`;

const Item = styled.Pressable`
  flex: 1;
  elevation: 3;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 5px;
  width: 140px;
  height: 160px;
  border-radius: 10px;
  background-color: ${colors.onSurface};
`;

const ReviewerName = styled.Text`
  color: ${colors.accent};
  font-weight: ${fontWeights.bold};
`;

const ReviewText = styled.Text`
  color: ${colors.backdrop};
  margin: 2px;
`;

export const DrHomeItem = ({ dr, navigation }) => (
  <Item onPress={() => navigation.navigate("DrProfileScreen", { dr: dr })}>
    <CompactImage source={{ uri: dr.picture }} />
    <CompactDrInfo dr={dr} />
  </Item>
);
