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
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "generalInformation"].join(' ')}>
                            <h3>General Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                            <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>heartland MID</Form.Label>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                            <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Authorized Signor</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('AuthorizedSignor', { required: false})}
                                        isInvalid={errors.AuthorizedSignor ? true : false}
                                        />
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Date Signed</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('DateSigned', { required: false})}
                                        isInvalid={errors.DateSigned ? true : false}
                                        />
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Contract End Date</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('ContractEndDate', { required: false})}
                                        isInvalid={errors.ContractEndDate ? true : false}
                                        />
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                        <div className={[stylesForCreate.formSection, "billingGroupAddress"].join(' ')}>
                            <h3>Billing Group Address</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('AddressLine2', { required: false})}
                                        isInvalid={errors.AddressLine1 ? true : false}
                                        />
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
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
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>heartland MID</Form.Label>
                                    <Form.Select 
                                        className={stylesForCreate.formInput} 
                                        {...register('States')}
                                        isInvalid={errors.States ? true : false}
                                        >
                                        {
                                            
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div className={[stylesForCreate.rightside, "col-sm-6"].join(' ')}>
                        <h3>Basic Information</h3>
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