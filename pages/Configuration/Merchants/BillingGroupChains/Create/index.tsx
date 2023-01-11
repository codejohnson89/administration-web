import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from './../../../../../Components/PageHeader/index';
import styles from '../../styles.module.css';
import stylesForCreate from './styles.module.css';
import FormError from "../../../../../Components/FormError";
import { IBillingGroupChains } from "../../../../../Utils/Interfaces/Configuration/Merchants/BillingGroupChains/BillingGroupChains";

export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IBillingGroupChains>();
    const onSubmit = (data:IBillingGroupChains) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Create Billing Group Chain" link="../../../../Configuration/Merchants/BillingGroupChains" text="Cancel"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-12"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "generalInformation"].join(' ')}>
                            <h3>General Information</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label>Billing Group Chain</Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('BillingGroupChainName', { required: true})}
                                        isInvalid={errors.BillingGroupChainName ? true : false}
                                        />
                                </Form.Group>
                                {errors.BillingGroupChainName && <FormError errorText="The Billing Group Chain field is required."/>}
                            </div>
                        </div>
                        {/* More details needed to complete this page */}
                        <div className={[stylesForCreate.formSection, "billingGroupChain"].join(' ')}>
                            <h3>Billing Group Chain</h3>
                            <div className="form-item">
                                <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                        className={stylesForCreate.formInput} 
                                        type="text"
                                        {...register('BillingGroupLookup', { required: false})}
                                        isInvalid={errors.BillingGroupLookup ? true : false}
                                        />
                                </Form.Group>
                                <Button>Lookup</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Button type="submit">Create</Button>
            </Form>
        </>
    )
}