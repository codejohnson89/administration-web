import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';


export default function BillingGroups():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton link="../../../Configuration/Profiles/ExternalUsers/Create" text="Add New External User" header="External User Index"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Billing Groups By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("UserName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" {...register("EmailAddress")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" {...register("FirstName")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" {...register("LastName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Linked to Billing Group</Form.Label>
                                <Form.Select {...register("LinkedToBillingGroup")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Linked to Partner</Form.Label>
                                <Form.Select {...register("LinkedToPartner")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Account Enabled?</Form.Label>
                                <Form.Select {...register("AccountEnabled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Must Change Password?</Form.Label>
                                <Form.Select {...register("MustChangePassword")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Is Locked Out?</Form.Label>
                                <Form.Select {...register("IsLockedOut")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Has Setup Account?</Form.Label>
                                <Form.Select {...register("HasSetupAccount")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only users with no linked billing groups</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyUsersWithNoLinkedBillingGroups")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show only users with no linked partners</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyUsersWithNoLinkedPartners")}/>
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