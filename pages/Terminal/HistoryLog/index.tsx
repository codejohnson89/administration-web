import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../Components/PageHeader';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function HistoryLog() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Terminal History"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter History By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Transaction</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Transaction")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Method</Form.Label>
                                <Form.Select {...register("Method")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Heartland User</Form.Label>
                                <Form.Control type="text" {...register("HeartlandUser")}/>
                            </Form.Group>                            
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" {...register("StartDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                            <Form.Label>End Date</Form.Label>
                                <Form.Check type="switch" {...register("EndDate")}/>
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