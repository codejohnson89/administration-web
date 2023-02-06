import { testData } from "../../../../../TestData/data";
import { useRouter } from 'next/router';
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
import { useEffect } from "react";

export default function Details() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IBillingGroupCreate>();
    const route = useRouter();

    useEffect(() => {
        console.log(route.query.id)
    })
    const id:any = route.query.id
    return (
        <>
            <PageHeaderWithButton header={"Details For " + testData[1].BusinessName} link={"../../../../Configuration/Merchants/BillingGroups/Edit/" + id} text="Edit"/>
            <Form className={stylesForCreate.form}>
            <div className={[stylesForCreate.formContainer].join(' ')}>
                <div className={[stylesForCreate.leftside].join(' ')}>
                    <div className={[styles.formSection].join(' ')}>
                        <div className={[styles.formSectionDivider, "generalInformation"].join(' ')}>
                        <h3>General Information</h3>
                        <hr></hr>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>doing business as</Form.Label>
                                    <Form.Text>{testData[1].BusinessName}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                            <Form.Group className={[styles.formGroup].join(' ')}>
                                <Form.Label>heartland MID</Form.Label>
                                <Form.Text>{testData[1].HeartlandMerchantId}</Form.Text>
                            </Form.Group>
                            {errors.BusinessName && <FormError errorText="The Heartland MID field is required."/>}
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Merchant Type</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text>Standard</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Sequence Key</Form.Label>
                                    <Form.Text>{testData[1].SequenceKey}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                            <Form.Group className={[styles.formGroup].join(' ')}>
                                <Form.Label>ODFI</Form.Label>
                                {/* This needs to be updated correctly */}
                                <Form.Text>Bancorp</Form.Text>
                            </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>SIC code</Form.Label>
                                    <Form.Text>{testData[1].StandardIndustrialClassificationCode}</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Relationship Manager</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text>Micah Johnson</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Secondary RM</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text></Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Authorized Signor</Form.Label>
                                    <Form.Text>{testData[1].AuthorizedSignor}</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Date Signed</Form.Label>
                                    <Form.Text>{testData[1].DateSigned}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Contract End Date</Form.Label>
                                    <Form.Text>{testData[1].ContractEndDate}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Support Contact</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text>Billing Solutions</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        </div>
                        <div className={[styles.formSectionDivider, "billingGroupInformation"].join(' ')}>
                        <h3>Billing Group Address</h3>
                        <hr></hr>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Text>{testData[1].AddressLine1}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Text>{testData[1].AddressLine2}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Text>{testData[1].City}</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>state</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text>OK</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>zip</Form.Label>
                                    <Form.Text>{testData[1].ZipCode}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>time zone</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text></Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        </div>
                        <div className={[styles.formSectionDivider, "legalInformation"].join(' ')}>
                        <h3>Legal Information</h3>
                        <hr></hr>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Legal Name</Form.Label>
                                        <Form.Text>{testData[1].LegalName}</Form.Text>
                                    </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Text>{testData[1].LegalAddressLine1}</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Text>{testData[1].LegalAddressLine2}</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>City</Form.Label>
                                        <Form.Text>{testData[1].LegalCity}</Form.Text>
                                    </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>state</Form.Label>
                                    {/* This needs to be updated correctly */}
                                    <Form.Text>OK</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                <Form.Group className={[styles.formGroup].join(' ')}>
                                    <Form.Label>zip</Form.Label>
                                    <Form.Text>{testData[1].LegalZipCode}</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        </div>
                        <div className={[styles.formSectionDivider, "BAGraylistBlockingInformation"].join(' ')}>
                        <h3>Bank Account Graylist Blocking</h3>
                        <hr></hr>
                        <div className="row">
                            <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Graylist Enforcement</Form.Label>
                                        {/* This needs to be updated correctly */}
                                        <Form.Text>Global</Form.Text>
                                    </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Days Until Expiration</Form.Label>
                                        <Form.Text>{testData[1].GraylistExpirationDays}</Form.Text>
                                    </Form.Group>
                            </div>
                            <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Account Block Threshold</Form.Label>
                                        <Form.Text>{testData[1].GraylistBlockThreshold}</Form.Text>
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
                            <hr></hr>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Select Funding Type</Form.Label>
                                            {/* This needs to be updated correctly */}
                                            <Form.Text>Standard</Form.Text>
                                        </Form.Group>
                                    </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Batch Close Time</Form.Label>
                                        <Form.Text>{testData[1].BatchCloseTime}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Business Days until Disbursement</Form.Label>
                                        <Form.Text>{testData[1].BusinessDaysUntilDisbursement}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Business Days to Delay Credits</Form.Label>
                                            <Form.Text>{testData[1].BusinessDaysToDelayCredits}</Form.Text>
                                        </Form.Group>
                                    </div>
                                <div className="form-item col-sm-4">
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Business Days To Delay Refunds</Form.Label>
                                            <Form.Text>{testData[1].BusinessDaysToDelayRefunds}</Form.Text>
                                        </Form.Group>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup,].join(' ')}>
                                            <Form.Label>Enable Net Disbursals and Returns</Form.Label>
                                            <Form.Text>No</Form.Text>
                                        </Form.Group>
                                        <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup,].join(' ')}>
                                            <Form.Label>Enable Returned Check Reinitiation</Form.Label>
                                            <Form.Text>No</Form.Text>
                                        </Form.Group>
                                        <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup,].join(' ')}>
                                            <Form.Label>Enable Dynamic Company Name</Form.Label>
                                            <Form.Text>No</Form.Text>
                                        </Form.Group>
                                        <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup,].join(' ')}>
                                            <Form.Label>Itemized Returns</Form.Label>
                                            <Form.Text>No</Form.Text>
                                        </Form.Group>
                                    </div>
                                    <div className={[styles.OCID, stylesForCreate.OCID, "col-sm-6"].join(' ')}>
                                        <Form.Group className={[styles.formGroup].join(' ')}>
                                            <Form.Label>Override Company Id</Form.Label>
                                            <Form.Text></Form.Text>
                                        </Form.Group>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={[styles.formSectionDivider, "transactionInformation"].join(' ')}>
                            <h3>Transaction Information</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Expected Annual Volume</Form.Label>
                                        <Form.Text>{testData[1].ExpectedAnnualVolume}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Expected Average Transaction Amount</Form.Label>
                                        <Form.Text>{testData[1].ExpectedAverageTransactionAmount}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Average No. of Transactions per Month</Form.Label>
                                        <Form.Text>{testData[1].ExpectedMonthlyTransactionCount}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Daily Batch Processing Limit</Form.Label>
                                        <Form.Text>{testData[1].DailyBatchProcessingLimit}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Monthly Batch Processing Limit</Form.Label>
                                        <Form.Text>{testData[1].MonthlyBatchProcessingLimit}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.formSectionDivider, "miscellaneousFeeInformation"].join(' ')}>
                            <h3>Miscellaneous Fee Information</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Setup Fee Amount</Form.Label>
                                        <Form.Text>{testData[1].SetupFeeAmount}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Monthly Fee Amount</Form.Label>
                                        <Form.Text>{testData[1].MonthlyFeeAmount}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Enable Fees</Form.Label>
                                    <Form.Text>Yes</Form.Text>
                                </Form.Group>
                                <Form.Group className={[ styles.formInput, styles.formSwitch, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Is Monthly Minimum Fee</Form.Label>
                                    <Form.Text>Yes</Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <div className={[styles.formSectionDivider, "expenseRateInformation"].join(' ')}>
                            <h3>Expense Rates</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Base Transaction Expense Rate</Form.Label>
                                        <Form.Text>{testData[1].BaseTransactionExpenseRate}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Verified Transaction Expense Rate</Form.Label>
                                        <Form.Text>{testData[1].VerifiedTransactionExpenseRate}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Unauthorized Return Expense Rate</Form.Label>
                                        <Form.Text>{testData[1].UnauthorizedReturnExpenseRate}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Monthly Fee Amount</Form.Label>
                                        <Form.Text>{testData[1].MonthlyFeeAmount}</Form.Text>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.formSectionDivider, "contactInformation"].join(' ')}>
                            <h3>Contact Information</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Contact Name</Form.Label>
                                        <Form.Text>{testData[1].ContactName}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Text>{testData[1].ContactEmail}</Form.Text>
                                    </Form.Group>
                                </div>
                                <div className="form-item col-sm-4">
                                    <Form.Group className={[styles.formGroup].join(' ')}>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Text>{testData[1].ContactPhoneNumber}</Form.Text>
                                    </Form.Group>
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

// export async function getServerSideProps() {
//     const res = await fetch('')
// }