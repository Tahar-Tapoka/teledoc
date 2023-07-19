import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Container, Spacer } from "../infrastructure/theme";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

const FullImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const loadingScreenImages = [
  require("../../assets/loadinScreen0.png"),
  require("../../assets/loadinScreen1.png"),
  require("../../assets/loadinScreen2.png"),
  require("../../assets/loadinScreen3.png"),
  require("../../assets/loadinScreen4.png"),
  require("../../assets/loadinScreen5.png"),
];

const LoadingScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % loadingScreenImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <FullImageBackground source={loadingScreenImages[currentImageIndex]}>
        <ActivityIndicator
          animating={true}
          color={colors.primary}
          size="large"
        />
        <Spacer size={4} />
      </FullImageBackground>
    </Container>
  );
};

export default LoadingScreen;
