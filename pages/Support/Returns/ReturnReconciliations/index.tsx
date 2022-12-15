import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from '../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function ReturnReconciliations():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Return Reconciliations" />
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Return Reconciliations By</legend>
                    <div className={styles.formFields}>
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
                                <Form.Label>ODFI</Form.Label>
                                <Form.Select {...register("ODFI")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Amount")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Batch Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("BatchDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Is Handled</Form.Label>
                                <Form.Select {...register("ODIsHandled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Created</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Created")}/>
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