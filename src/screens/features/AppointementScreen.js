import {
  Button,
  Chip,
  Dialog,
  PaperProvider,
  Portal,
  Text,
} from "react-native-paper";
import {
  Spacer,
  ThemeButton,
  ThemeScroll,
  theme,
} from "../../infrastructure/theme";
import { AppDrInfo } from "../../components/AppointementItem";
import { formatDate, formatUpperCase } from "../../functions";
import { Container } from "../../infrastructure/theme";
import { styled } from "styled-components";
import { useState } from "react";
import { colors } from "../../infrastructure/theme/colors";
import { View } from "react-native";

const CompactImage = styled.Image`
  border-radius: 100px;
  width: 170px;
  height: 170px;
`;

const AppointementScreen = ({ route }) => {
  const { appointement, dr } = route?.params;
  const onCancel = () => {
    showDialog();
  };
  const onReschedule = () => console.warn("Appointement Rescheduled");
  const [visible, setVisible] = useState(false);
  const cancelHandler = () => {
    console.warn("Appointement Canceled");
    hideDialog();
  };
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <ThemeScroll>
      <Spacer size={4} />
      <Container>
        {/* <AppDrInfo dr={dr} /> */}
        <CompactImage source={{ uri: dr.picture }} />
        <Text variant="titleLarge">Dr. {dr.full_name}</Text>
        <Text variant="titleMedium">{formatUpperCase(dr.speciality)}</Text>
        <Text variant="titleMedium">Address: {dr.address}</Text>
        <Spacer size={4} />
        <Text
          variant="titleLarge"
          style={{ color: colors.primary, fontWeight: "bold" }}
        >
          {formatDate(appointement?.date, appointement?.time)}
        </Text>
        <Text variant="bodyLarge">
          Arriver 15 min plus tôt que l'heure du rendez-vous !!
        </Text>
      </Container>
      <Spacer size={5} />
      <Text variant="titleLarge">Amenez tous vos: </Text>
      <Chip icon="check-circle">Ordenances</Chip>
      <Chip icon="check-circle">Rapports</Chip>
      <Chip icon="check-circle">Test sanguin</Chip>
      <Chip icon="check-circle">Radiographies</Chip>
      <Chip icon="check-circle">IRMs</Chip>
      <Container>
        <ThemeButton
          onPress={onReschedule}
          icon="clock-outline"
          buttonColor="#F94C10"
          textColor="#F8F0E5"
        >
          Reschedule Appointement
        </ThemeButton>
        <ThemeButton
          onPress={onCancel}
          icon="cancel"
          buttonColor="#C70039"
          textColor="#F8F0E5"
        >
          Cancel Appointement
        </ThemeButton>
      </Container>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text variant="bodyLarge">
              Êtes-vous sûr de vouloir annuler ce rendez-vous
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={cancelHandler}>Oui</Button>
            <Button onPress={hideDialog}>Non</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ThemeScroll>
  );
};

export default AppointementScreen;
