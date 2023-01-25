import { MerchantTypeId } from "../../../../Enums/MerchantTypeId";
import { UnitedStates } from './../../../../Enums/States';

export interface IBillingGroupCreate {
    BusinessName: string;
    HeartlandMerchantId: string;
    MerchantTypeId: MerchantTypeId;
    SequenceKey: number;
    FinancialInstitutionId: number;
    StandardIndustrialClassificationCode: number;
    RelationshipManagerId: number;
    SecondaryRelationshipManagerId: number;
    AuthorizedSignor: string;
    DateSigned: string; //these need to be updated to represent a date
    ContractEndDate: string; //these need to be updated to represent a date
    SupportContactId: number;
    States: typeof UnitedStates;
    AddressLine1: string;
    AddressLine2?: string;
    City: string;
}