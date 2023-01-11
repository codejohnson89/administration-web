import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormError from "../../../../Components/FormError";
import { PageHeaderWithButton } from "../../../../Components/PageHeader";
import { UnitedStates } from "../../../../Utils/Enums/States";
import { SupportContactId } from "../../../../Utils/Enums/SupportContactId";
import { Partners } from "../../../../Utils/Interfaces/Configuration/Merchants/Partners/Partners";
import styles from '../../styles.module.css';
import stylesForCreate from './styles.module.css';

export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Partners>();
    const onSubmit = (data:Partners) => console.log(data);
    return (
        <>
            <PageHeaderWithButton header="Create Fee Template" link="../../../../Configuration/Partners" text="Cancel"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "generalInformation"].join(' ')}>
                            <h3>General Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>name</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('Name', { required: true})}
                                        isInvalid={errors.Name ? true : false}
                                        />
                                </Form.Group>
                                {errors.Name && <FormError errorText="The Name field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Support Contact</Form.Label>
                                    <Form.Select 
                                        className={stylesForCreate.formInput} 
                                        {...register('SupportContactId')}
                                        isInvalid={errors.SupportContactId ? true : false}
                                        >
                                        <option value={SupportContactId.BillingSolutions}>Billing Solutions</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "batchInformation"].join(' ')}>
                            <h3>Batch Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Business Days until Disbursement</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="number"
                                        placeholder="3"
                                        {...register('BusinessDaysUntilDisbursement', { min:0, max:31, required: false})}
                                        isInvalid={errors.BusinessDaysUntilDisbursement ? true : false}
                                        />
                                </Form.Group>
                                {errors.BusinessDaysUntilDisbursement && <FormError errorText="The field Business Days until Disbursement must be between 0 and 31."/>}
                            </div>
                        </div>
                        <div className={[stylesForCreate.formSection, "batchInformation"].join(' ')}>
                            <h3>Address Information</h3>
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
                                {errors.AddressLine1 && <FormError errorText="The Address Line 1 field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('AddressLine2', { required: false})}
                                        isInvalid={errors.AddressLine2 ? true : false}
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
                                {errors.City && <FormError errorText="The City field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>state</Form.Label>
                                    <Form.Select 
                                        className={stylesForCreate.formInput} 
                                        {...register('StateCode')}
                                        isInvalid={errors.StateCode ? true : false}
                                        >
                                        {
                                            UnitedStates.map((state) => {
                                                return (
                                                        <option key={state.short} value={state.id}>{state.state}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>ZIP code</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="number"
                                        placeholder="12345"
                                        {...register('ZipCode', { required: true})}
                                        isInvalid={errors.ZipCode ? true : false}
                                        />
                                </Form.Group>
                                {errors.ZipCode && <FormError errorText="The ZIP Code field is required."/>}
                            </div>
                        </div>
                    </div>
                </div>
                <Button type="submit">Create</Button>
            </Form>
        </>
    )
}