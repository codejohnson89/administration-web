import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';


export default function BillingGroups():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Payment Channels Index"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Payment Channels By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Payment Channel Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("PaymentChannelName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Legal Name</Form.Label>
                                <Form.Control type="text" {...register("BillingGroupLegalName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Business Name</Form.Label>
                                <Form.Control type="text" {...register("BillingGroupBusinessName")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ACH Display Name</Form.Label>
                                <Form.Control type="text" {...register("ACHDisplayName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Transit Routing Number</Form.Label>
                                <Form.Control type="text" {...register("TransitRoutingNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>DDA Account Number</Form.Label>
                                <Form.Control type="text" {...register("DDAAccountNumber")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Partner</Form.Label>
                                <Form.Select {...register("Partner")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Business Unit</Form.Label>
                                <Form.Select {...register("BusinessUnit")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Required Bank Account Validation</Form.Label>
                                <Form.Select {...register("RequiredBankAccountValidation")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Is Terminated</Form.Label>
                                <Form.Select {...register("Terminated")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Accepted SEC Codes</Form.Label>
                                <Form.Control type="text" {...register("AcceptedSECCodes")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Payment Channel ID</Form.Label>
                                <Form.Control type="text" {...register("PaymentChannelID")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show Only Payment Channels with No Active Fees</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyPaymentChannelswithNoActiveFees")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show Only Unapproved Payment Channels</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyUnapprovedPaymentChannels")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show Only Inactive Payment Channels</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyInactivePaymentChannels")}/>
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