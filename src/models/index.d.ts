import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Service {
  VIDEO = "VIDEO",
  CONSULTATION = "CONSULTATION",
  HOME = "HOME"
}

export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  VALIDATING = "VALIDATING",
  DISABLED = "DISABLED"
}

export enum Certificates {
  DIALISE = "DIALISE",
  DIABETE = "DIABETE",
  ZICOMATI = "ZICOMATI",
  CHKOPOLOGIE = "CHKOPOLOGIE",
  KARAONI = "KARAONI",
  NICOLOGIE = "NICOLOGIE"
}

export enum Speciality {
  GENERALISTE = "GENERALISTE",
  PEDIATRE = "PEDIATRE",
  GENICOLOGUE = "GENICOLOGUE",
  CARDIOLOGUE = "CARDIOLOGUE",
  DERMATOLOGUE = "DERMATOLOGUE",
  PSYCHIATRE = "PSYCHIATRE",
  ORTHOPEDISTE = "ORTHOPEDISTE",
  OPHTALMOLOGUE = "OPHTALMOLOGUE",
  ORL = "ORL",
  NEUROLOGUE = "NEUROLOGUE",
  RADIOLOGUE = "RADIOLOGUE",
  ANESTHESIOLOGUE = "ANESTHESIOLOGUE",
  NEPHROLOGUE = "NEPHROLOGUE",
  PNEUMOLOGUE = "PNEUMOLOGUE",
  HEMATOLOGUE = "HEMATOLOGUE",
  ONCOLOGUE = "ONCOLOGUE",
  ENDOCRINOLOGUE = "ENDOCRINOLOGUE",
  GASTROLOGUE = "GASTROLOGUE",
  RHUMATOLOGUE = "RHUMATOLOGUE",
  REEDUCATIONISTE = "REEDUCATIONISTE",
  EUROLOGUE = "EUROLOGUE",
  NEURO_CHIRURGIEN = "NEURO_CHIRURGIEN",
  INFECTIOLOGUE = "INFECTIOLOGUE"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerPayement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly payement_proof?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly consultantID: string;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly payement_proof?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly consultantID: string;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payement = LazyLoading extends LazyLoadingDisabled ? EagerPayement : LazyPayement

export declare const Payement: (new (init: ModelInit<Payement>) => Payement) & {
  copyOf(source: Payement, mutator: (draft: MutableModel<Payement>) => MutableModel<Payement> | void): Payement;
}

type EagerAppointement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly date?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly amount?: number | null;
  readonly Payement?: Payement | null;
  readonly consultantID: string;
  readonly patientID: string;
  readonly service?: Service | keyof typeof Service | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointementPayementId?: string | null;
}

type LazyAppointement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly date?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly amount?: number | null;
  readonly Payement: AsyncItem<Payement | undefined>;
  readonly consultantID: string;
  readonly patientID: string;
  readonly service?: Service | keyof typeof Service | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointementPayementId?: string | null;
}

export declare type Appointement = LazyLoading extends LazyLoadingDisabled ? EagerAppointement : LazyAppointement

export declare const Appointement: (new (init: ModelInit<Appointement>) => Appointement) & {
  copyOf(source: Appointement, mutator: (draft: MutableModel<Appointement>) => MutableModel<Appointement> | void): Appointement;
}

type EagerCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: Certificates | keyof typeof Certificates | null;
  readonly color?: string | null;
  readonly consultants?: (ConsultantCertificate | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: Certificates | keyof typeof Certificates | null;
  readonly color?: string | null;
  readonly consultants: AsyncCollection<ConsultantCertificate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Certificate = LazyLoading extends LazyLoadingDisabled ? EagerCertificate : LazyCertificate

export declare const Certificate: (new (init: ModelInit<Certificate>) => Certificate) & {
  copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
}

type EagerConsultant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consultant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly full_name?: string | null;
  readonly email?: string | null;
  readonly sub?: string | null;
  readonly mobile?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly picture?: string | null;
  readonly speciality?: Speciality | keyof typeof Speciality | null;
  readonly score?: number | null;
  readonly diplome?: string | null;
  readonly nbr_patient?: number | null;
  readonly descreprtion?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly patients?: (PatientConsultant | null)[] | null;
  readonly cost?: number | null;
  readonly experience?: number | null;
  readonly working_time?: string | null;
  readonly working_day?: string | null;
  readonly Certificates?: (ConsultantCertificate | null)[] | null;
  readonly Payements?: (Payement | null)[] | null;
  readonly Appointements?: (Appointement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsultant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Consultant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly full_name?: string | null;
  readonly email?: string | null;
  readonly sub?: string | null;
  readonly mobile?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly picture?: string | null;
  readonly speciality?: Speciality | keyof typeof Speciality | null;
  readonly score?: number | null;
  readonly diplome?: string | null;
  readonly nbr_patient?: number | null;
  readonly descreprtion?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly Reviews: AsyncCollection<Review>;
  readonly patients: AsyncCollection<PatientConsultant>;
  readonly cost?: number | null;
  readonly experience?: number | null;
  readonly working_time?: string | null;
  readonly working_day?: string | null;
  readonly Certificates: AsyncCollection<ConsultantCertificate>;
  readonly Payements: AsyncCollection<Payement>;
  readonly Appointements: AsyncCollection<Appointement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Consultant = LazyLoading extends LazyLoadingDisabled ? EagerConsultant : LazyConsultant

export declare const Consultant: (new (init: ModelInit<Consultant>) => Consultant) & {
  copyOf(source: Consultant, mutator: (draft: MutableModel<Consultant>) => MutableModel<Consultant> | void): Consultant;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly score?: number | null;
  readonly consultantID: string;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly score?: number | null;
  readonly consultantID: string;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly sub: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly mobile?: string | null;
  readonly date_of_birth?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly full_name?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly username?: string | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly Consultants?: (PatientConsultant | null)[] | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly Payements?: (Payement | null)[] | null;
  readonly Appointements?: (Appointement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly sub: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly mobile?: string | null;
  readonly date_of_birth?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly full_name?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly username?: string | null;
  readonly Reviews: AsyncCollection<Review>;
  readonly Consultants: AsyncCollection<PatientConsultant>;
  readonly status?: Status | keyof typeof Status | null;
  readonly Payements: AsyncCollection<Payement>;
  readonly Appointements: AsyncCollection<Appointement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerConsultantCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsultantCertificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly certificateId?: string | null;
  readonly consultantId?: string | null;
  readonly certificate: Certificate;
  readonly consultant: Consultant;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsultantCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsultantCertificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly certificateId?: string | null;
  readonly consultantId?: string | null;
  readonly certificate: AsyncItem<Certificate>;
  readonly consultant: AsyncItem<Consultant>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConsultantCertificate = LazyLoading extends LazyLoadingDisabled ? EagerConsultantCertificate : LazyConsultantCertificate

export declare const ConsultantCertificate: (new (init: ModelInit<ConsultantCertificate>) => ConsultantCertificate) & {
  copyOf(source: ConsultantCertificate, mutator: (draft: MutableModel<ConsultantCertificate>) => MutableModel<ConsultantCertificate> | void): ConsultantCertificate;
}

type EagerPatientConsultant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientConsultant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consultantId?: string | null;
  readonly patientId?: string | null;
  readonly consultant: Consultant;
  readonly patient: Patient;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatientConsultant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PatientConsultant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consultantId?: string | null;
  readonly patientId?: string | null;
  readonly consultant: AsyncItem<Consultant>;
  readonly patient: AsyncItem<Patient>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PatientConsultant = LazyLoading extends LazyLoadingDisabled ? EagerPatientConsultant : LazyPatientConsultant

export declare const PatientConsultant: (new (init: ModelInit<PatientConsultant>) => PatientConsultant) & {
  copyOf(source: PatientConsultant, mutator: (draft: MutableModel<PatientConsultant>) => MutableModel<PatientConsultant> | void): PatientConsultant;
}