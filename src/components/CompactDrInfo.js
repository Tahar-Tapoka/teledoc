import React, { useState } from "react";
import styled from "styled-components/native";
import { Platform, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { RowContainer, ThemeView } from "../infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";
import { Pressable } from "react-native";
import { Callout, CalloutSubview } from "react-native-maps";

export const CompactImage = styled.Image`
  border-radius: 100px;
  width: 40px;
  height: 40px;
`;

const Item = styled.View`
  flex: 1;
  padding: 5px;
  width: 140px;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.background};
`;

export const CompactDrInfo = ({ dr }) => (
  <Callout>
    <Item>
      <Text>Dr. {dr.full_name}</Text>
      <Text>
        {dr.speciality.charAt(0) + dr.speciality.slice(1).toLowerCase()}
      </Text>
      <RowContainer>
        <Text style={{ marginRight: 5 }}>{dr.score.toFixed(1)}</Text>
        <Ionicons name="star" size={16} color="gold" />
      </RowContainer>
    </Item>
    {/* <CalloutSubview style={{ marginLeft: 5 }} /> */}
  </Callout>
);
