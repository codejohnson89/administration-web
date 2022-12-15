import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function BillingGroups():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton header="Billing Group Invoice Index" link="/" text="Export To CSV"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Invoice By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("StartDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("EndDate")}/>
                            </Form.Group>
                            {/* This input field will need more work for the details it requires */}
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Is Handled?</Form.Label>
                                <Form.Select {...register("FeesEnabled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Invoice Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("InvoiceNumber")}/>
                            </Form.Group>
                            {/* This input field will need more work for the details it requires */}
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group</Form.Label>
                                <Form.Select {...register("BillingGroup")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Accounting Type?</Form.Label>
                                <Form.Select {...register("FeesEnabled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Business Unit</Form.Label>
                                <Form.Select {...register("BusinessUnit")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>
            </section>
        </>
    )
}