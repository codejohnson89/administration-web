import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from './../../../../../Components/PageHeader/index';
import styles from '../../styles.module.css';
import stylesForCreate from '../../styles.module.css';
import FormError from "../../../../../Components/FormError";

export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<any>();
    const onSubmit = (data:any) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Add New Business Unit" link="../../../../Configuration/BusinessUnits/BusinessUnits" text="Cancel"/>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <h3>General Information</h3>
                        <div className="form-item">
                            <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    className={stylesForCreate.formInput} 
                                    type="text"
                                    {...register('Name', { required: true})}
                                    isInvalid={errors.Name ? true : false}
                                    />
                            </Form.Group>
                            {errors.Name  && <FormError errorText="The Doing Business As field is required."/>}
                        </div>
                    </div>
                    <div className={[stylesForCreate.rightside, "col-sm-6"].join(' ')}></div>
                </div>
            </Form>
        </>
    )
}