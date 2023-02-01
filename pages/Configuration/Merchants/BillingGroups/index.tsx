import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';


export default function BillingGroups():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    // Create a filter function to filter data from an array and return results


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton link="../../../Configuration/Merchants/BillingGroups/Create/" text="Add New Billing Group" header="Billing Groups Index"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Billing Groups By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label className={styles.formLabel}>Legal Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("LegalName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Doing Business As</Form.Label>
                                <Form.Control type="text" {...register("DBA")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Heartland MID</Form.Label>
                                <Form.Control type="text" {...register("HeartlandMID")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Sequence Key</Form.Label>
                                <Form.Control type="text" {...register("SequenceKey")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" {...register("City")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" {...register("State")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" {...register("ZipCode")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" {...register("PhoneNumber")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ODFI</Form.Label>
                                <Form.Control type="text" {...register("odfi")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Are included in the tax reports?</Form.Label>
                                <Form.Select {...register("TaxReportIncluded")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Have their fees enabled?</Form.Label>
                                <Form.Select {...register("FeesEnabled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Have an &apos;Activation Date&apos;?</Form.Label>
                                <Form.Select {...register("ActivationDate")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Is Terminated?</Form.Label>
                                <Form.Select {...register("Terminated")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only billing groups with no payment channels</Form.Label>
                                <Form.Check type="switch" {...register("BillingGroupNoPaymentChannels")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only billing groups with inactive payment channels</Form.Label>
                                <Form.Check type="switch" {...register("BillingGroupInactivePaymentChannels")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only billing groups with unapproved payment channels</Form.Label>
                                <Form.Check type="switch" {...register("BillingGroupUnapprovedPaymentChannels")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only billing groups with payment channels with no active fees</Form.Label>
                                <Form.Check type="switch" {...register("BillingGroupPaymentChannelsNoActiveFees")}/>
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