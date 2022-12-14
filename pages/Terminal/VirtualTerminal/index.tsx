import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../Components/PageHeader';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function VirtualTerminal() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Virtual Terminal"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Transaction Information</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Transaction</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Transaction")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Payor Name</Form.Label>
                                <Form.Control type="text" {...register("PayorName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Method</Form.Label>
                                <Form.Select {...register("Method")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Reduction Amount</Form.Label>
                                <Form.Control type="text" {...register("ReductionAmount")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                            <Form.Label>Urgent Refund</Form.Label>
                                <Form.Check type="switch" {...register("UrgentRefund")}/>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Submit</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>
            </section>
        </>
    )
}