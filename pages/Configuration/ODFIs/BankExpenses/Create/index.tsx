import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from './../../../../../Components/PageHeader/index';
import styles from '../../styles.module.css';
import stylesForCreate from '../../styles.module.css';
import FormError from "../../../../../Components/FormError";
import Link from "next/link";

export default function Create() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<any>();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <PageHeaderWithButton header="Add New Expense" link="../../../../Configuration/ODFIs/BankExpenses" text="Cancel"/>
            <div className="information">
                <p>Expenses can only be created for financial institutions that have transmitted an ACH file during the month of the expense and do not already have an expense created for them. If you do not see the financial institution listed in the dropdown below, it does not meet both of these requirements.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className={stylesForCreate.form}>
                <div className={[stylesForCreate.formContainer, "row"].join(' ')}>
                    <div className={[stylesForCreate.leftside, "col-sm-6"].join(' ')}>
                        <h3>General Information</h3>
                        {/* More detailed coding needed for this portion of the form to work */}
                    </div>
                    <div className={[stylesForCreate.rightside, "col-sm-6"].join(' ')}>
                        <div className={[stylesForCreate.formSection, "accountAnalysis"].join(' ')}>
                            <h3>Account Analysis</h3>
                            <div className="form-item">
                                    <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                        <Form.Label>Analyzed Charges</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('AnalyzedCharges', { required: true})}
                                            isInvalid={errors.AnalyzedCharges ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.AnalyzedCharges  && <FormError errorText="The Doing Business As field is required."/>}
                                </div>
                            <div className="form-item">
                                    <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                        <Form.Label>Fee Charges</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('FeeCharges', { required: true})}
                                            isInvalid={errors.FeeCharges ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.FeeCharges  && <FormError errorText="The Doing Business As field is required."/>}
                                </div>
                            <div className="form-item">
                                    <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                        <Form.Label>Credits</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('Credits', { required: true})}
                                            isInvalid={errors.Credits ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.Credits   && <FormError errorText="The Doing Business As field is required."/>}
                                </div>
                            <div className="form-item">
                                    <Form.Group className={[styles.formInput, stylesForCreate.formGroup].join(' ')}>
                                        <Form.Label>Interest Earnings</Form.Label>
                                        <Form.Control 
                                            className={stylesForCreate.formInput} 
                                            type="text"
                                            {...register('Earnings', { required: true})}
                                            isInvalid={errors.Earnings ? true : false}
                                            />
                                    </Form.Group>
                                    {errors.Earnings   && <FormError errorText="The Doing Business As field is required."/>}
                                </div>
                            <p>Unsure where to find these values? Check these annotated samples of common bank statements.</p>
                            <ul>
                                <li>
                                    <Link href="">Bank of America</Link>
                                </li>
                                <li>
                                    <Link href="">PNC Bank</Link>
                                </li>
                                <li>
                                    <Link href="">Wells Fargo</Link>
                                </li>
                            </ul>
                            <p>Zero values are allowed in case of situations like there being no new transactions even though files were transmitted.</p>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}