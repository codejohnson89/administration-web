import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from './../../../../../Components/PageHeader/index';
import styles from '../../styles.module.css';
import FormError from "../../../../../Components/FormError";
import { IFeeTemplate } from "../../../../../Utils/Interfaces/Configuration/Merchants/FeeTemplate/FeeTemplate";

export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFeeTemplate>();
    const onSubmit = (data:IFeeTemplate) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Create Fee Template" link="../../../../Configuration/Merchants/FeeTemplates" text="Cancel"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={[styles.formContainer, "row"].join(' ')}>
                    <div className={[styles.leftside, "col-sm-12"].join(' ')}>
                        <div className={[styles.formSection, "generalInformation"].join(' ')}>
                            <h3>Find Relationship Managers</h3>
                            <div className="form-item">
                                <Form.Group className={[ styles.formGroup].join(' ')}>
                                    <Form.Label>name</Form.Label>
                                    <Form.Control 
                                        className={styles.formInput} 
                                        type="text"
                                        {...register('Name', { required: true})}
                                        isInvalid={errors.Name ? true : false}
                                        />
                                </Form.Group>
                                {errors.Name && <FormError errorText="The Name field is required."/>}
                            </div>
                        </div>
                        {/* More details needed to complete this page */}
                    </div>
                </div>
                <Button type="submit">Create</Button>
            </Form>
        </>
    )
}