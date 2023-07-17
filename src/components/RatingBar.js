import React, { useState } from "react";

// import all the components we are going to use
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { RowContainer } from "../infrastructure/theme";
import { styled } from "styled-components/native";

const RatingBar = ({ rating, disabled, onPress }) => {
  const Star = styled.Image`
    width: ${disabled ? 18 : 30}px;
    height: ${disabled ? 18 : 30}px;
    resize-mode: cover;
  `;
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(rating);
  // Filled Star. You can also give the path from local
  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  // Empty Star. You can also give the path from local
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  return (
    <RowContainer>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            key={item}
            onPress={() => {
              setDefaultRating(item);
              onPress(item);
            }}
          >
            <Star
              source={
                item <= defaultRating
                  ? { uri: starImageFilled }
                  : { uri: starImageCorner }
              }
            />
          </TouchableOpacity>
        );
      })}
    </RowContainer>
  );
};

export default RatingBar;
