import { StyleSheet, Text } from "react-native";
import {
  PostContainer,
  PostText,
  Spacer,
  ThemeView,
  TitleText,
  theme,
} from "../../infrastructure/theme";
import { ScrollView } from "react-native";
import { CustomParagraph } from "../../components/CustomParagraph";

const PoliciesScreen = ({ navigation, route }) => {
  const policy = route?.params.policy;
  return (
    <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <ThemeView>
        <Spacer size={5}>
          {policy ? (
            <ThemeView>
              <TitleText>Politique de confidentialité </TitleText>
              <CustomParagraph
                title="Introduction"
                txt="La politique de confidentialité décrite ci-dessous explique comment notre application de télémédecine traite, utilise et protège les informations personnelles des utilisateurs en Algérie. Nous accordons une grande importance à la confidentialité de vos données et nous nous engageons à les protéger conformément aux lois en vigueur. Veuillez lire attentivement cette politique pour comprendre comment nous collectons, utilisons et stockons vos informations."
              />
              <CustomParagraph
                title="Informations collectées "
                txt="Lorsque vous utilisez notre application de télémédecine, nous pouvons collecter les informations personnelles suivantes :"
              />
              <CustomParagraph txt="1.	Informations d'identification : nom, adresse, numéro de téléphone, adresse e-mail, date de naissance, sexe, et autres informations nécessaires pour vous identifier en tant qu'utilisateur." />
              <CustomParagraph txt="2.	Informations médicales : antécédents médicaux, diagnostics, prescriptions, traitements, images médicales, et autres informations médicales que vous fournissez volontairement aux médecins ou professionnels de santé." />
              <CustomParagraph txt="3.	Informations de paiement : si vous effectuez des paiements via notre application, nous collectons les informations nécessaires pour traiter ces transactions, telles que les détails de votre carte de crédit ou les informations de votre compte bancaire." />
              <CustomParagraph
                title="Utilisation des informations :"
                txt="Nous utilisons les informations collectées dans le but de :"
              />
              <CustomParagraph txt="1.	Fournir nos services de télémédecine, y compris la prise de rendez-vous, les consultations à distance, les conseils médicaux et les prescriptions en ligne." />
              <CustomParagraph txt="2.	Faciliter la communication entre vous et les médecins ou professionnels de santé." />
              <CustomParagraph txt="3.	Améliorer nos services, adapter les recommandations médicales en fonction de vos besoins et optimiser l'expérience utilisateur." />
              <CustomParagraph txt="4.	Facturer les services et traiter les paiements." />
              <CustomParagraph txt="5.	Respecter nos obligations légales, notamment en matière de tenue de dossiers médicaux." />
              <CustomParagraph
                title="Protection des informations :"
                txt="Nous prenons des mesures techniques, organisationnelles et de sécurité appropriée pour protéger vos informations personnelles contre tout accès non autorisé, divulgation, altération ou destruction. Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing, sauf si vous nous en donnez l'autorisation expresse."
              />
              <CustomParagraph
                title="Conservation des données :"
                txt="Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services de télémédecine et respecter nos obligations légales. Nous effaçons ou anonymisons vos données lorsque nous n'en avons plus besoin."
              />
              <CustomParagraph
                title="Vos droits :"
                txt="Vous avez le droit d'accéder, de corriger, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez exercer ces droits en nous contactant via les coordonnées fournies à la fin de cette politique. "
              />
              <CustomParagraph
                title="Modifications de la politique de confidentialité :"
                txt="Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur notre application et sera effective dès sa publication. Nous vous encourageons à consulter régulièrement cette politique pour vous tenir informé des changements éventuels."
              />
              <CustomParagraph
                title="Contact :"
                txt="Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou la manière dont nous traitons vos informations personnelles, veuillez nous contacter à l'adresse suivante :
                [Adresse de contact]"
              />
              <CustomParagraph
                title="Conclusion :"
                txt="Nous prenons la confidentialité de vos informations personnelles"
              />
            </ThemeView>
          ) : (
            <ThemeView>
              <TitleText>Conditions d'utilisation </TitleText>
              <CustomParagraph txt="Bienvenue dans notre application de télémédecine en Algérie. Avant d'utiliser notre service, veuillez lire attentivement les conditions d'utilisation suivantes. En utilisant notre application, vous acceptez d'être lié par ces conditions." />
              <CustomParagraph
                title="    Services de télémédecine :"
                txt="    Notre application de télémédecine permet aux utilisateurs de consulter des médecins et des professionnels de santé à distance, de prendre des rendez-vous, de recevoir des conseils médicaux et des prescriptions en ligne. Les services fournis sont basés sur les informations médicales fournies par les utilisateurs. Les médecins et professionnels de santé qui interagissent avec les utilisateurs sont des praticiens qualifiés et autorisés en Algérie."
              />
              <CustomParagraph
                title="    Utilisation de l'application :"
                txt="    Vous devez être âgé d'au moins 18 ans pour utiliser notre application de télémédecine en Algérie, sauf si vous avez l'autorisation d'un parent ou d'un tuteur légal. Vous acceptez d'utiliser l'application uniquement à des fins légales et conformément aux lois et réglementations en vigueur en Algérie."
              />
              <CustomParagraph
                title="    Informations médicales :"
                txt="    Lors de l'utilisation de notre application, vous êtes responsable de l'exactitude, de l'exhaustivité et de la mise à jour de toutes les informations médicales que vous fournissez. Les informations médicales que vous partagez avec les médecins ou professionnels de santé doivent être véridiques et exactes. Nous ne sommes pas responsables des conséquences résultant de l'utilisation d'informations médicales incorrectes ou trompeuses."
              />
              <CustomParagraph
                title="    Confidentialité :"
                txt="    Nous accordons une grande importance à la confidentialité de vos informations personnelles. Veuillez consulter notre politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos informations."
              />
              <CustomParagraph
                title="    Responsabilité :"
                txt="    Notre application de télémédecine fournit un moyen pratique pour la consultation médicale à distance, mais il est important de noter qu'elle ne remplace pas une visite médicale en personne. Les médecins et professionnels de santé fournissent des conseils basés sur les informations que vous fournissez, mais ils ne peuvent pas établir de diagnostic précis sans un examen médical complet. Vous acceptez d'utiliser notre application de télémédecine à vos propres risques."
              />
              <CustomParagraph
                title="    Limitation de responsabilité :"
                txt="    Nous nous efforçons de fournir des services de qualité, mais nous ne pouvons pas garantir l'exactitude, l'exhaustivité ou la disponibilité continue de notre application. Nous ne serons pas tenus responsables des dommages directs, indirects, consécutifs ou spéciaux découlant de l'utilisation ou de l'impossibilité d'utiliser notre application."
              />
              <CustomParagraph
                title="    Propriété intellectuelle :"
                txt="    Tous les droits de propriété intellectuelle liés à notre application de télémédecine, y compris les marques, les logos, les contenus et les fonctionnalités, sont la propriété exclusive de leurs propriétaires respectifs. Vous acceptez de ne pas copier, modifier, distribuer ou reproduire notre application ou son contenu sans notre autorisation préalable écrite."
              />
              <CustomParagraph
                title="    Modifications des conditions d'utilisation :"
                txt="    Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toute modification sera publiée sur l'application"
              />
            </ThemeView>
          )}
        </Spacer>
      </ThemeView>
    </ScrollView>
  );
};

export default PoliciesScreen;

const styles = StyleSheet.create({});
