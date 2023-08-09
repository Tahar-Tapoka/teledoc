import styled from "styled-components/native";
import { Rating } from "../infrastructure/theme";
import { colors } from "../infrastructure/theme/colors";
import { fontWeights } from "../infrastructure/theme/fonts";
import { formatUpperCase } from "../functions";

export const CompactImage = styled.Image`
  border-radius: 100px;
  width: 40px;
  height: 40px;
`;

const Item = styled.View`
  padding: 3px;
  width: 140px;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.card};
`;
const ReviewerName = styled.Text`
  color: ${colors.accent};
  font-weight: ${fontWeights.bold};
`;

const ReviewText = styled.Text`
  color: ${colors.backdrop};
`;

export const CompactDrInfo = ({ dr }) => (
  <Item>
    <ReviewerName>Dr. {dr.full_name}</ReviewerName>
    <ReviewText>{formatUpperCase(dr.speciality)}</ReviewText>
    <Rating rating={parseFloat(dr.score).toFixed(1)} />
  </Item>
);
