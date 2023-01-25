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
            <PageHeaderWithButton header="Details For Black Mesa Thermal Expansion" link="../../../../Configuration/Partners" text="Edit"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "generalInformation"].join(' ')}>
                            <h3>General Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>name</Form.Label>
                                    <Form.Text>Black Mesa Thermal Expansion</Form.Text>
                                </Form.Group>
                                {errors.Name && <FormError errorText="The Name field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Support Contact</Form.Label>
                                    <Form.Text>Billing Solutions</Form.Text>
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
                                    <Form.Text>3</Form.Text>
                                </Form.Group>
                                {errors.BusinessDaysUntilDisbursement && <FormError errorText="The field Business Days until Disbursement must be between 0 and 31."/>}
                            </div>
                        </div>
                        <div className={[stylesForCreate.formSection, "batchInformation"].join(' ')}>
                            <h3>Address Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Text>123 main st</Form.Text>
                                </Form.Group>
                                {errors.AddressLine1 && <FormError errorText="The Address Line 1 field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Text></Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Text>Houston</Form.Text>
                                </Form.Group>
                                {errors.City && <FormError errorText="The City field is required."/>}
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>state</Form.Label>
                                    <Form.Text>Texas</Form.Text>
                                </Form.Group>
                            </div>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>ZIP code</Form.Label>
                                    <Form.Text>77024</Form.Text>
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