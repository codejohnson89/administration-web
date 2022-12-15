import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function ACHEntryFinder():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="ACH Entry Finder" />
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter By Entry</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Trace Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("TraceNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Payer Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("PayerName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Account Type</Form.Label>
                                <Form.Select {...register("IsSent")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>From Address</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("FromAddress")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Routing Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("RoutingNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>DDA Account Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("DDAAccountNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Amount")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Net Entry</Form.Label>
                                <Form.Select {...register("NetEntry")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("CompanyName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Standard Entry Class Type</Form.Label>
                                <Form.Select {...register("StandardEntryClassType")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Company Entry Description</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("CompanyEntryDescription")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Batch Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("BatchDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Identification Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("IdentificationNumber")}/>
                            </Form.Group>
                        </Row>
                        <legend>Find By ACH File</legend>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ACH File</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("ACHFile")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Deposit Start Date Range</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("DepositStartDateRange")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Deposit End Date Range</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("DepositEndDateRange")}/>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                        <p>Use the form above to find ACH entries. You must use at least one filter.</p>
                    </div>
                </Form>
            </section>
        </>
    )
}