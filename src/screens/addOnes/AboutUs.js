import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

import Logo from "../../../assets/tahar.png";
import Logo1 from "../../../assets/tina.png";
import {
  RowContainer,
  Spacer,
  ThemeScroll,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import { CustomParagraph } from "../../components/CustomParagraph";
import StaffContainer from "../../components/StaffContainer";

const AboutUs = () => {
  return (
    <ThemeScroll>
      <ThemeView>
        <Spacer size={4}>
          <TitleText>À propos de nous</TitleText>
        </Spacer>
        <CustomParagraph
          title="Notre mission est d'élever le niveau de soins de santé pour tous"
          txt="Parce que les soins de santé de haute qualité ne doivent pas être exclusifs, coûteux ou difficiles à utiliser. Vos membres méritent mieux. Associez-vous à la santé incluse pour contribuer à élever le niveau de soins de santé pour tous."
        />
        <CustomParagraph
          title="Nos services :"
          txt="À travers notre application de télémédecine, nous offrons une gamme de services, notamment :"
        />
        <CustomParagraph
          title="1.  Consultations médicales à distance :"
          txt="   Vous pouvez prendre rendez-vous et consulter des médecins et des professionnels de santé qualifiés via des appels vidéo sécurisés. Ces consultations permettent d'obtenir des conseils médicaux, de discuter de symptômes, de recevoir des diagnostics préliminaires, des orientations sur les traitements et des prescriptions en ligne lorsque cela est approprié."
        />
        <CustomParagraph
          title="2.  Suivi médical à distance : "
          txt="   Nous offrons également la possibilité de suivre l'évolution de certaines conditions médicales à distance, en permettant aux patients de partager des informations sur leur santé avec les médecins et professionnels de santé, qui peuvent fournir des recommandations, ajuster les traitements et répondre aux questions."
        />
        <CustomParagraph
          title="3.  Rendez-vous médicaux en ligne : "
          txt="   Notre application facilite la prise de rendez-vous avec des médecins dans différentes spécialités, en évitant les longues attentes et les déplacements inutiles. Vous pouvez choisir le créneau horaire qui vous convient et réserver votre rendez-vous en ligne."
        />
        <TitleText>Notre staff</TitleText>
        <Spacer size={4}>
          <RowContainer style={{ flexWrap: "wrap", flexGrow: 1 }}>
            <StaffContainer
              logo={Logo}
              txt="Tahar is our proud engineer and developper he has more than a whole year of experience"
            />
            <StaffContainer
              logo={Logo1}
              txt="Tina is our proud Dr and head dr. she has no experience at all, run away she'll kill u"
            />
            <StaffContainer
              logo={Logo1}
              txt="Tina is our proud Dr and head dr. she has no experience at all, run away she'll kill u"
            />
          </RowContainer>
        </Spacer>
      </ThemeView>
    </ThemeScroll>
  );
};

export default AboutUs;
