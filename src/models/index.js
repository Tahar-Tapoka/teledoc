// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Service = {
  "VIDEO": "VIDEO",
  "CONSULTATION": "CONSULTATION",
  "HOME": "HOME"
};

const Status = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE",
  "VALIDATING": "VALIDATING",
  "DISABLED": "DISABLED"
};

const Certificates = {
  "DIALISE": "DIALISE",
  "DIABETE": "DIABETE",
  "ZICOMATI": "ZICOMATI",
  "CHKOPOLOGIE": "CHKOPOLOGIE",
  "KARAONI": "KARAONI",
  "NICOLOGIE": "NICOLOGIE"
};

const Speciality = {
  "GENERALISTE": "GENERALISTE",
  "PEDIATRE": "PEDIATRE",
  "GENICOLOGUE": "GENICOLOGUE",
  "CARDIOLOGUE": "CARDIOLOGUE",
  "DERMATOLOGUE": "DERMATOLOGUE",
  "PSYCHIATRE": "PSYCHIATRE",
  "ORTHOPEDISTE": "ORTHOPEDISTE",
  "OPHTALMOLOGUE": "OPHTALMOLOGUE",
  "ORL": "ORL",
  "NEUROLOGUE": "NEUROLOGUE",
  "RADIOLOGUE": "RADIOLOGUE",
  "ANESTHESIOLOGUE": "ANESTHESIOLOGUE",
  "NEPHROLOGUE": "NEPHROLOGUE",
  "PNEUMOLOGUE": "PNEUMOLOGUE",
  "HEMATOLOGUE": "HEMATOLOGUE",
  "ONCOLOGUE": "ONCOLOGUE",
  "ENDOCRINOLOGUE": "ENDOCRINOLOGUE",
  "GASTROLOGUE": "GASTROLOGUE",
  "RHUMATOLOGUE": "RHUMATOLOGUE",
  "REEDUCATIONISTE": "REEDUCATIONISTE",
  "EUROLOGUE": "EUROLOGUE",
  "NEURO_CHIRURGIEN": "NEURO_CHIRURGIEN",
  "INFECTIOLOGUE": "INFECTIOLOGUE"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Payement, Appointement, Certificate, Consultant, Review, Patient, ConsultantCertificate, PatientConsultant } = initSchema(schema);

export {
  Payement,
  Appointement,
  Certificate,
  Consultant,
  Review,
  Patient,
  ConsultantCertificate,
  PatientConsultant,
  Service,
  Status,
  Certificates,
  Speciality,
  Gender
};