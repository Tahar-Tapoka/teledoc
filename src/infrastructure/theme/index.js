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

export const ThemeButton = styled(Button).attrs({
  mode: "contained",
  // textColor: "#F1F1F1",
})`
  width: 80%;
  margin: ${space[1]}px;
`;
export const ThemeInput = styled(TextInput).attrs({
  type: "outlined",
  // contentStyle: { backgroundColor: colors.backdrop },
})`
  width: 80%;
  height: 50px;
  margin-vertical: ${space[2]}px;
  background-color: ${colors.surface};
`;
export const ThemeView = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.background};
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
  font-weight: ${fontWeights.bold};
  color: #fff;
`;
export const TitleText = styled.Text`
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.title}px;
  color: ${colors.text};
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const Spacer = styled.View`
  margin-vertical: ${(props) => space[props.size]}px;
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
