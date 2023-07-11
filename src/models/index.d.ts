import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  VALIDATING = "VALIDATING",
  DISABLED = "DISABLED"
}

export enum Speciality {
  MEDECINE_GENERALE = "MEDECINE_GENERALE",
  PEDIATRIE = "PEDIATRIE",
  GYNECOLOGIE = "GYNECOLOGIE",
  CARDIOLOGIE = "CARDIOLOGIE",
  DERMATOLOGIE = "DERMATOLOGIE",
  PSYCHIATRIE = "PSYCHIATRIE",
  ORTHOPEDIE = "ORTHOPEDIE",
  OPHTALMOLOGIE = "OPHTALMOLOGIE",
  ORL = "ORL",
  NEUROLOGIE = "NEUROLOGIE",
  RADIOLOGIE = "RADIOLOGIE",
  ANESTHESIOLOGIE = "ANESTHESIOLOGIE",
  NEPHROLOGIE = "NEPHROLOGIE",
  PNEUMOLOGIE = "PNEUMOLOGIE",
  HEMATOLOGIE = "HEMATOLOGIE",
  ONCOLOGIE = "ONCOLOGIE",
  ENDOCRINOLOGIE = "ENDOCRINOLOGIE",
  GASTRO_ENTEROLOGIE = "GASTRO_ENTEROLOGIE",
  RHUMATOLOGIE = "RHUMATOLOGIE",
  REEDUCATION_FONCTIONNELLE = "REEDUCATION_FONCTIONNELLE",
  EUROLOGIE = "EUROLOGIE",
  NEURO_CHIRURGIE = "NEURO_CHIRURGIE",
  INFECTIOLOGIE = "INFECTIOLOGIE"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Consultant = LazyLoading extends LazyLoadingDisabled ? EagerConsultant : LazyConsultant

export declare const Consultant: (new (init: ModelInit<Consultant>) => Consultant) & {
  copyOf(source: Consultant, mutator: (draft: MutableModel<Consultant>) => MutableModel<Consultant> | void): Consultant;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
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