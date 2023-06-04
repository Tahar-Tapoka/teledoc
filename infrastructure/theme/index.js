import styled from "styled-components/native";
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { Button, TextInput } from "react-native-paper";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  // fonts,
  fontSizes,
  fontWeights,
  roundness: 2,
};

export const ThemeButton = styled(Button).attrs({ mode: "contained" })`
  width: 80%;
  margin: ${space[4]}px;
`;
export const ThemeInput = styled(TextInput).attrs({ type: "outlined" })`
  width: 80%;
  margin-top: ${space[4]}px;
`;
export const Container = styled.SafeAreaView`
  background-color: ${colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const RowContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const ThemeButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const TitleText = styled.Text`
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.title}px;
  color: ${colors.text};
  margin-top: ${space[5]}px;
`;
export const PostContainer = styled.View`
  padding: 10px 20px;
  width: 100%;
`;
export const PostText = styled.Text`
  color: #73737d;
  font-size: 16px;
  padding: 10px 0 0;
  font-weight: ${fontWeights.regular};
`;
