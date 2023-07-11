import React, { useState } from "react";
import styled from "styled-components/native";
import { Platform, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { RowContainer, ThemeView } from "../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";
import { Pressable } from "react-native";

const CompactImage = styled.Image`
  border-radius: 100px;
  width: 60px;
  height: 60px;
`;

const Item = styled.View.attrs({ elevation: 5 })`
  padding: 5px;
  max-width: 140px;
  align-items: center;
  border-radius: 10px;
`;
//   background-color: ${colors.background};

export const CompactDrInfo = ({ dr }) => {
  //   const Image = Platform.OS === "android" ? CompactWebview : CompactImage;
  const [toggle, setToggle] = useState(false);
  const speciality =
    dr.speciality.charAt(0) + dr.speciality.slice(1).toLowerCase();
  return (
    <TouchableOpacity onPress={() => setToggle(!toggle)}>
      <CompactImage source={{ uri: dr.picture }} />
      {toggle && (
        <Item>
          <Text>Dr. {dr.full_name}</Text>
          <Text>{speciality}</Text>
          <RowContainer>
            <Text style={{ marginLeft: 5 }}>{dr.score.toFixed(1)}</Text>
            <Ionicons name="star" size={16} color="gold" />
          </RowContainer>
        </Item>
      )}
    </TouchableOpacity>
  );
};
