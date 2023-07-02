import { Text } from "react-native";
import { PostContainer, PostText, theme } from "../infrastructure/theme";

export const CustomParagraph = ({ title, txt }) => (
  <PostContainer>
    {title && (
      <Text style={{ fontWeight: theme.fontWeights.bold }}>{title}</Text>
    )}
    <PostText>{txt}</PostText>
  </PostContainer>
);
