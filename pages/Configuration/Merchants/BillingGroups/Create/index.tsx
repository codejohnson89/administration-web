import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from './../../../../../Components/PageHeader/index';
import styles from '../../styles.module.css';
import stylesForCreate from './styles.module.css';
import FormError from "../../../../../Components/FormError";
import { MerchantTypeId } from "../../../../../Utils/Enums/MerchantTypeId";
import { ODFI } from "../../../../../Utils/Enums/ODFI";
import { RelationshipManager } from "../../../../../Utils/Enums/RelationshipManager";
import { IBillingGroupCreate } from "../../../../../Utils/Interfaces/Configuration/Merchants/BillingGroups/BillingGroupCreate";

/* Creating a form with a bunch of inputs. */
export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IBillingGroupCreate>();
    const onSubmit = (data:IBillingGroupCreate) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Add New Billing Group" link="../../../../Configuration/Merchants/BillingGroups" text="Cancel"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer].join(' ')}>
                    <div className={[stylesForCreate.leftside].join(' ')}>
                        <div className={[styles.formSection].join(' ')}>
                            <div className={[styles.formSectionDivider, "generalInformation"].join(' ')}>
                            <h3>General Information</h3>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>doing business as</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('BusinessName', { required: true})}
                                            isInvalid={errors.BusinessName ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.BusinessName && <FormError errorText="The Doing Business As field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>heartland MID</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('HeartlandMerchantId', { required: true})}
                                        isInvalid={errors.HeartlandMerchantId ? true : false}
                                        />
                                </Form.Group>
                                {errors.BusinessName && <FormError errorText="The Heartland MID field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Merchant Type</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('MerchantTypeId')}
                                            isInvalid={errors.MerchantTypeId ? true : false}
                                            >
                                            <option value={MerchantTypeId.Standard}>Standard</option>
                                            <option value={MerchantTypeId.MidMarket}>MidMarket</option>
                                            <option value={MerchantTypeId.Enterprise}>Enterprise</option>
                                            <option value={MerchantTypeId.Standard}>Standard</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Sequence Key</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="number"
                                            {...register('SequenceKey', {min: 1, max: 2147483647, required: true})}
                                            isInvalid={errors.SequenceKey ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.BusinessName && <FormError errorText="The field Sequence Key must be between 1 and 2147483647."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>ODFI</Form.Label>
                                    <Form.Select 
                                        className={stylesForCreate.formInput} 
                                        {...register('FinancialInstitutionId')}
                                        isInvalid={errors.FinancialInstitutionId ? true : false}
                                        >
                                        <option value={ODFI.Bancorp}>Bancorp</option>
                                        <option value={ODFI.FrankiesQuickLoans}>Frankie&apos;s Quick Loans</option>
                                        <option value={ODFI.SmallTonyLoands}>Small Tony Loands</option>
                                        <option value={ODFI.TheDollarBank}>The Dollar Bank</option>
                                        <option value={ODFI.fdsa}>fdsa</option>
                                    </Form.Select>
                                </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>SIC code</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="number"
                                            {...register('StandardIndustrialClassificationCode', { required: true})}
                                            isInvalid={errors.StandardIndustrialClassificationCode ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.BusinessName && <FormError errorText="The SIC Code field is required."/>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Relationship Manager</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('RelationshipManagerId')}
                                            isInvalid={errors.RelationshipManagerId ? true : false}
                                            >
                                            <option value={RelationshipManager.Job}>Job</option>
                                            <option value={RelationshipManager.Joe}>Joe</option>
                                            <option value={RelationshipManager.Joel}>Joel</option>
                                            <option value={RelationshipManager.Joey}>Joey</option>
                                            
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Secondary RM</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('SecondaryRelationshipManagerId')}
                                            isInvalid={errors.SecondaryRelationshipManagerId ? true : false}
                                            >
                                            <option value={RelationshipManager.Job}>Job</option>
                                            <option value={RelationshipManager.Joe}>Joe</option>
                                            <option value={RelationshipManager.Joel}>Joel</option>
                                            <option value={RelationshipManager.Joey}>Joey</option>
                                            
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Authorized Signor</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('AuthorizedSignor', { required: false})}
                                            isInvalid={errors.AuthorizedSignor ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Date Signed</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="date"
                                            {...register('DateSigned', { required: false})}
                                            isInvalid={errors.DateSigned ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Contract End Date</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="date"
                                            {...register('ContractEndDate', { required: false})}
                                            isInvalid={errors.ContractEndDate ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Support Contact</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('SupportContactId')}
                                            isInvalid={errors.SupportContactId ? true : false}
                                            >
                                            <option value="Billing Solutions">Billing Solutions</option>
                                            
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            </div>
                            <div className={[styles.formSectionDivider, "billingGroupInformation"].join(' ')}>
                            <h3>Billing Group Address</h3>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('AddressLine1', { required: true})}
                                            isInvalid={errors.AddressLine1 ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.BusinessName && <FormError errorText="The Address Line 1 field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('AddressLine2', { required: false})}
                                            isInvalid={errors.AddressLine2 ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('City', { required: true})}
                                            isInvalid={errors.City ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.BusinessName && <FormError errorText="The City field is required."/>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>state</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('StateCode')}
                                            isInvalid={errors.StateCode ? true : false}
                                            >
                                            {
                                                <></>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>zip</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('ZipCode', { required: true})}
                                            isInvalid={errors.ZipCode ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.ZipCode && <FormError errorText="The ZIP Code field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>time zone</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('TimeZoneId')}
                                            isInvalid={errors.TimeZoneId ? true : false}
                                            >
                                            {
                                                <></>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            </div>
                            <div className={[styles.formSectionDivider, "legalInformation"].join(' ')}>
                            <h3>Legal Information</h3>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Legal Name</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('LegalName', { required: true})}
                                                isInvalid={errors.LegalName ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.LegalName && <FormError errorText="The Legal Name field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('LegalAddressLine1', { required: true})}
                                            isInvalid={errors.LegalAddressLine1 ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.LegalAddressLine1 && <FormError errorText="The Address Line 1 field is required."/>}
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('LegalAddressLine2', { required: false})}
                                            isInvalid={errors.LegalAddressLine2 ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('LegalCity', { required: false})}
                                                isInvalid={errors.LegalCity ? true : false}
                                                />
                                        </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>state</Form.Label>
                                        <Form.Select 
                                            className={stylesForCreate.formInput} 
                                            {...register('LegalStateCode')}
                                            isInvalid={errors.LegalStateCode ? true : false}
                                            >
                                            {
                                                <></>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>zip</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('LegalZipCode', { required: false})}
                                            isInvalid={errors.LegalZipCode ? true : false}
                                            />
                                    </Form.Group>
                                </div>
                            </div>
                            </div>
                            <div className={[styles.formSectionDivider, "BAGraylistBlockingInformation"].join(' ')}>
                            <h3>Bank Account Graylist Blocking</h3>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Graylist Enforcement</Form.Label>
                                            <Form.Select 
                                                className={stylesForCreate.formInput} 
                                                {...register('GraylistEnforcementTypeId')}
                                                isInvalid={errors.GraylistEnforcementTypeId ? true : false}
                                                >
                                                {
                                                    <></>
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Days Until Expiration</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('GraylistExpirationDays', { required: false})}
                                                isInvalid={errors.GraylistExpirationDays ? true : false}
                                                />
                                        </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Account Block Threshold</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('GraylistBlockThreshold', { required: false})}
                                                isInvalid={errors.GraylistBlockThreshold ? true : false}
                                                />
                                        </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                    <Form.Label>Ignore Leading Zeroes</Form.Label>
                                    <Form.Check type="switch" {...register("GraylistIgnoreLeadingZeroes")}/>
                                </Form.Group>
                            </div>
                            </div>
                            <div className={[styles.formSectionDivider, "batchInformation"].join(' ')}>
                                <h3>Batch Information</h3>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                            <Form.Group className={[styles.formGroup].join(' ')}>
                                                <Form.Label>Select Funding Type</Form.Label>
                                                <Form.Select 
                                                    className={stylesForCreate.formInput} 
                                                    {...register('BillingGroupFundingTypeId')}
                                                    isInvalid={errors.BillingGroupFundingTypeId ? true : false}
                                                    >
                                                    {
                                                        <></>
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Batch Close Time</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="time"
                                                {...register('BatchCloseTime', { required: false})}
                                                isInvalid={errors.BatchCloseTime ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Business Days until Disbursement</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('BusinessDaysUntilDisbursement', { required: false})}
                                                isInvalid={errors.BusinessDaysUntilDisbursement ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                            <Form.Group className={[styles.formGroup].join(' ')}>
                                                <Form.Label>Business Days to Delay Credits</Form.Label>
                                                <Form.Control 
                                                    className={stylesForCreate.formInput} 
                                                    type="text"
                                                    {...register('BusinessDaysToDelayCredits', { required: false})}
                                                    isInvalid={errors.BusinessDaysToDelayCredits ? true : false}
                                                    />
                                            </Form.Group>
                                        </div>
                                    <div className="form-item col-sm-4">
                                            <Form.Group className={[styles.formGroup].join(' ')}>
                                                <Form.Label>Business Days To Delay Refunds</Form.Label>
                                                <Form.Control 
                                                    className={stylesForCreate.formInput} 
                                                    type="text"
                                                    {...register('BusinessDaysToDelayRefunds', { required: false})}
                                                    isInvalid={errors.BusinessDaysToDelayRefunds ? true : false}
                                                    />
                                            </Form.Group>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                                <Form.Label>Enable Net Disbursals and Returns</Form.Label>
                                                <Form.Check type="switch" {...register("EnableNetDisbursementsAndReturns")}/>
                                            </Form.Group>
                                            <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                                <Form.Label>Enable Returned Check Reinitiation</Form.Label>
                                                <Form.Check type="switch" {...register("EnableReinitiation")}/>
                                            </Form.Group>
                                            <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                                <Form.Label>Enable Dynamic Company Name</Form.Label>
                                                <Form.Check type="switch" {...register("EnableDynamicCompanyName")}/>
                                            </Form.Group>
                                            <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                                <Form.Label>Itemized Returns</Form.Label>
                                                <Form.Check type="switch" {...register("EnableItemizedReturns")}/>
                                            </Form.Group>
                                        </div>
                                        <div className={[styles.OCID, "col-sm-6"].join(' ')}>
                                            <Form.Group className={[styles.formGroup].join(' ')}>
                                                <Form.Label>Override Company Id</Form.Label>
                                                <Form.Control 
                                                    className={stylesForCreate.formInput} 
                                                    type="text"
                                                    {...register('OverrideCompanyId', { required: false})}
                                                    isInvalid={errors.OverrideCompanyId ? true : false}
                                                    />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={[styles.formSectionDivider, "transactionInformation"].join(' ')}>
                                <h3>Transaction Information</h3>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Expected Annual Volume</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('ExpectedAnnualVolume', { min: .01, required: true})}
                                                isInvalid={errors.ExpectedAnnualVolume ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ExpectedAnnualVolume && <FormError errorText="Please enter a value greater than 0 for the Expected Annual Volume under Transaction Information."/>}
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Expected Average Transaction Amount</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('ExpectedAverageTransactionAmount', {min: .01, required: true})}
                                                isInvalid={errors.ExpectedAverageTransactionAmount ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ExpectedAverageTransactionAmount && <FormError errorText="Please enter a value greater than 0 for the Expected Average Transaction Amount under Transaction Information."/>}
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Average No. of Transactions per Month</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('ExpectedMonthlyTransactionCount', {min: .01, required: true})}
                                                isInvalid={errors.ExpectedMonthlyTransactionCount ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ExpectedMonthlyTransactionCount && <FormError errorText="Please enter a value greater than 0 for the Expected Monthly Transaction Count under Transaction Information."/>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Daily Batch Processing Limit</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('DailyBatchProcessingLimit', { required: false})}
                                                isInvalid={errors.DailyBatchProcessingLimit ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Monthly Batch Processing Limit</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('MonthlyBatchProcessingLimit', { required: false})}
                                                isInvalid={errors.MonthlyBatchProcessingLimit ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.formSectionDivider, "miscellaneousFeeInformation"].join(' ')}>
                                <h3>Miscellaneous Fee Information</h3>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Setup Fee Amount</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('SetupFeeAmount', { required: false})}
                                                isInvalid={errors.SetupFeeAmount ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Monthly Fee Amount</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('MonthlyFeeAmount', { required: false})}
                                                isInvalid={errors.MonthlyFeeAmount ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                        <Form.Label>Enable Fees</Form.Label>
                                        <Form.Check type="switch" {...register("EnableFees")}/>
                                    </Form.Group>
                                    <Form.Group className={[ styles.formInput, styles.formSwitch].join(' ')}>
                                        <Form.Label>Is Monthly Minimum Fee</Form.Label>
                                        <Form.Check type="switch" {...register("IsMonthlyFeeMinimum")}/>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={[styles.formSectionDivider, "expenseRateInformation"].join(' ')}>
                                <h3>Expense Rates</h3>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Base Transaction Expense Rate</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('BaseTransactionExpenseRate', { required: false})}
                                                isInvalid={errors.BaseTransactionExpenseRate ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Verified Transaction Expense Rate</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('VerifiedTransactionExpenseRate', { required: false})}
                                                isInvalid={errors.VerifiedTransactionExpenseRate ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Unauthorized Return Expense Rate</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('ReturnExpenseRate', { required: false})}
                                                isInvalid={errors.ReturnExpenseRate ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Monthly Fee Amount</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="number"
                                                {...register('UnauthorizedReturnExpenseRate', { required: false})}
                                                isInvalid={errors.UnauthorizedReturnExpenseRate ? true : false}
                                                />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.formSectionDivider, "contactInformation"].join(' ')}>
                                <h3>Contact Information</h3>
                                <div className="row">
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Contact Name</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('ContactName', { required: true})}
                                                isInvalid={errors.ContactName ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ContactName && <FormError errorText="The Contact Name field is required."/>}
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('ContactEmail', { required: true})}
                                                isInvalid={errors.ContactEmail ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ContactEmail && <FormError errorText="The Email Address field is required."/>}
                                    </div>
                                    <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control 
                                                className={stylesForCreate.formInput} 
                                                type="text"
                                                {...register('ContactPhoneNumber', { required: true})}
                                                isInvalid={errors.ContactPhoneNumber ? true : false}
                                                />
                                        </Form.Group>
                                        {errors.ContactPhoneNumber && <FormError errorText="The Phone Number field is required."/>}
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.formSectionDivider, "configurationInformation"].join(' ')}>
                                {/* This section needs more clarity as to what its for and how it should interact inside this form */}
                            </div>
                            <div className={[styles.formSectionDivider, "contactBottomLookupInformation"].join(' ')}>
                                {/* This section needs more clarity as to what its for and how it should interact inside this form */}
                            </div>
                        </div>
                    </div>
                </div>
                <Button type="submit">Create</Button>
            </Form>
        </>
    )
}


{/* <Form.Group>
<Form.Label className={stylesForCreate.label}></Form.Label>
<Form.Control></Form.Control>
</Form.Group> */}