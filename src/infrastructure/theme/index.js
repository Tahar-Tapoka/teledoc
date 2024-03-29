import styled from "styled-components/native";
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { Button, DefaultTheme, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const theme = {
  ...DefaultTheme,
  dark: false,
  colors,
  roundness: 2,
  space,
  lineHeights,
  sizes,
  fontSizes,
  fontWeights,
  // fonts: {
  //   regular: "Roboto-Regular",
  //   medium: "Roboto-Medium",
  // },
  // dimensions: {
  //   iconSize: 24,
  //   buttonHeight: 48,
  //   // ... other dimension properties
  // },
  // elevation: (level) => level * 2,
  mode: "adaptive",
  animation: {
    scale: 1.0,
  },
};

export const ThemeButton = styled(Button).attrs({
  mode: "contained",
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

//------------------   Text   ----------------------------//
export const ThemeButtonText = styled.Text`
  font-size: 16px;
  font-weight: ${fontWeights.bold};
  color: #fff;
`;
export const SubtitleText = styled.Text`
  font-size: 18px;
`;
// font-weight: ${fontWeights.bold};
export const TitleText = styled.Text`
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.title}px;
  color: ${colors.text};
`;

export const NotificationText = styled.Text`
  color: ${colors.notification};
`;

export const PostText = styled.Text`
  color: #73737d;
  font-size: 16px;
  padding: 10px 0 0;
  font-weight: ${fontWeights.regular};
`;

export const FeedbackText = styled.Text`
  margin-left: 2px;
  font-weight: ${fontWeights.bold};
  margin-vertical: 3px;
`;

//------------------   View   ----------------------------//

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;
export const Spacer = styled.View`
  margin-vertical: ${(props) => space[props.size]}px;
`;

export const HomeContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${colors.background};
`;

export const ThemeView = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.background};
`;
export const ThemeScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
  background-color: ${colors.background};
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.surface};
  border-radius: 10px;
  width: 47px;
`; //see where its used width: 100%;
// justify-content: center;

export const Rating = ({ rating }) => (
  <RatingContainer>
    <MaterialCommunityIcons name="star" size={18} color={"#FAC213"} />
    <FeedbackText>{rating}</FeedbackText>
    {/*.toFixed(1) homie get it back*/}
  </RatingContainer>
);
