import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { fontWeights } from "../infrastructure/theme/fonts";
import { formatUpperCase } from "../functions";

//maybe refractor some of these styles------------------------------------------------
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
//------------------------------------------------------------------------------------------------

const specialityPic = {
  GENERALISTE: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
  PEDIATRE: "https://cdn-icons-png.flaticon.com/512/5996/5996306.png",
  GENICOLOGUE: "https://cdn-icons-png.flaticon.com/512/846/846995.png",
  CARDIOLOGUE: "https://cdn-icons-png.flaticon.com/512/387/387577.png",
  DERMATOLOGUE: "https://cdn-icons-png.flaticon.com/512/10154/10154433.png",
  PSYCHIATRE: "https://cdn-icons-png.flaticon.com/512/7974/7974315.png",
  ORTHOPEDISTE: "https://cdn-icons-png.flaticon.com/512/5996/5996288.png",
  OPHTALMOLOGUE: "https://cdn-icons-png.flaticon.com/512/2857/2857950.png",
  ORL: "https://cdn-icons-png.flaticon.com/512/3468/3468049.png",
  NEUROLOGUE: "https://cdn-icons-png.flaticon.com/512/4006/4006171.png",
  RADIOLOGUE: "https://cdn-icons-png.flaticon.com/256/6402/6402613.png",
  ANESTHESIOLOGUE: "https://cdn-icons-png.flaticon.com/512/8981/8981003.png",
  NEPHROLOGUE: "https://cdn-icons-png.flaticon.com/512/7284/7284113.png",
  PNEUMOLOGUE: "https://cdn-icons-png.flaticon.com/512/4006/4006309.png",
  HEMATOLOGUE: "https://cdn-icons-png.flaticon.com/512/4228/4228728.png",
  ONCOLOGUE: "https://cdn-icons-png.flaticon.com/512/3755/3755710.png",
  ENDOCRINOLOGUE: "https://cdn-icons-png.flaticon.com/512/4807/4807844.png",
  GASTROLOGUE: "https://cdn-icons-png.flaticon.com/512/4006/4006298.png",
  RHUMATOLOGUE: "https://cdn-icons-png.flaticon.com/512/340/340087.png",
  REEDUCATIONISTE: "https://cdn-icons-png.flaticon.com/512/909/909124.png",
  EUROLOGUE: "https://cdn-icons-png.flaticon.com/512/4006/4006294.png",
  NEURO_CHIRURGIEN: "https://cdn-icons-png.flaticon.com/512/6025/6025099.png",
  INFECTIOLOGUE: "https://cdn-icons-png.flaticon.com/512/4597/4597399.png",
};
export const SpecialityItem = ({ speciality, navigation }) => (
  <Item onPress={() => console.warn(specialityPic[speciality])}>
    <CompactImage
      source={{
        uri: specialityPic[speciality],
      }}
    />
    <ReviewerName>{formatUpperCase(speciality)}</ReviewerName>
  </Item>
);
