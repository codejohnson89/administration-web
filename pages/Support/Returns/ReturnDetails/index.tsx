import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function ReturnDetails():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Return Details" />
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Return Details By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Return Detail Type</Form.Label>
                                <Form.Select {...register("ReturnDetailType")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Trace Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("TraceNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Amount")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Return Type</Form.Label>
                                <Form.Select {...register("ReturnType")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Return File ID</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("ReturnFileID")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Amount")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ACH Entry ID</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("ACHEntryID")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Created Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("CreatedDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Business Unit</Form.Label>
                                <Form.Select {...register("BusinessUnit")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Business Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("BillingGroupBusinessName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Legal Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("BillingGroupLegalName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ACH Display Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("ACHDisplayName")}/>
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