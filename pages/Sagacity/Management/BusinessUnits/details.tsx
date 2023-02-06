import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from "../../../../Components/PageHeader";
import styles from '../../styles.module.css';
import Link from "next/link";

export default function Details():JSX.Element{
    const  { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return(
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton header="Details For " link="detailsEdit" text="Edit" />
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <div className="col-sm-6">
                            <legend className={styles.legend}>General Information</legend>
                            <div className={styles.formFields}>
                                <Row>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("Name")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Risk Tolerance</Form.Label>
                                        <Form.Select className={styles.formInput} {...register("RiskToleranceLevel")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Cross-Platform ID</Form.Label>
                                        <Form.Select className={styles.formInput} {...register("PlatformId")} />
                                    </Form.Group>
                                </Row>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <legend className={styles.legend}>Expense Rates</legend>
                            <div className={styles.formFields}>
                                <Row className={styles.btnContainer}>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Development Expense Rate</Form.Label>
                                        <Form.Control className={styles.formInput} {...register("DevelopmentExpenseRate")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Authentication Expense Rate</Form.Label>
                                        <Form.Control className={styles.formInput} {...register("AuthenticationExpenseRate")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>Verification Expense Rate</Form.Label>
                                        <Form.Control className={styles.formInput} {...register("VerificationExpenseRate")} />
                                    </Form.Group>
                                </Row>
                            </div>
                        </div>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <div className="col-sm-6">
                            <legend className={styles.legend}>Linked Application Users</legend>
                            <div className={styles.formFields}>
                                <Row>
                                    <Form.Group className={styles.formInput}>
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("UserName")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Button className="col-sm-3" type="button">Link Users</Button>
                                    <Button className="col-sm-3" type="button">Unlink Users</Button>
                                </Row>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <legend className={styles.legend}>Linked Colonnade Business Units</legend>
                            <div className={styles.formFields}>
                                <Row>
                                    <p>This Sagacity Business Unit has not been linked to any Colonnade Business Units.</p>
                                    <p>To link more Colonnade Business Units to this Business Unit, locate and edit the Business Unit <Link className={styles.link} href={{pathname: "/Configuration/BusinessUnits/BusinessUnits"}}>in Colonnade</Link>.</p>
                                </Row>
                            </div>
                        </div>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <div>
                            <legend className={styles.legend}>Modification Details</legend>
                            <div className={styles.formFields}>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Created Date</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("CreatedDate")} />
                                    </Form.Group>
                               
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Last Modified</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("ModifiedDate")} />
                                    </Form.Group>
                                </Row>
                            </div>
                        </div>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <div>
                            <legend className={styles.legend}>Fields Required for Authentication</legend>
                            <div className={styles.formFields}>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldFirstName")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldLastName")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Doing Business As</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldBusinessName")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldMiddleName")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Suffix</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldNameSuffix")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsAddressLineOneRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("RequiredFieldAddressLineTwo")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsCityRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>State</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsStateCodeRequired")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsZipCodeRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Home Phone</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsHomePhoneRequired")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Work Phone</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsWorkPhoneRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Tax ID</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsTaxIdRequired")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>Birthdate</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsBirthdateRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>ID Number</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsIdNumberRequired")} />
                                    </Form.Group>
                                    <Form.Group className={["col-sm-6", styles.formInput].join(' ')}>
                                        <Form.Label>ID State</Form.Label>
                                        <Form.Control className={styles.formInput} type="text" {...register("IsIdStateRequired")} />
                                    </Form.Group>
                                </Row>
                                <Row className={styles.btnContainer}>
                                    <Button className="col-sm-3" type="button">
                                        <Link href={{pathname: "../BusinessUnits/configure"}}>Configure</Link>
                                    </Button>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Form>
            </section>
        </>
    )
}