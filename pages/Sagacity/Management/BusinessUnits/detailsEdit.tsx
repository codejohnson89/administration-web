import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithTwoButtons } from "../../../../Components/PageHeader";
import styles from '../../styles.module.css';


export default function DetailsEdit():JSX.Element{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return(
        <>
            <section className="content-wrapper">
                <PageHeaderWithTwoButtons header="Edit " link="/" text="Save Changes" link2="./details" text2="Cancel" />
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
                </Form>
            </section>
        </>
    )
}