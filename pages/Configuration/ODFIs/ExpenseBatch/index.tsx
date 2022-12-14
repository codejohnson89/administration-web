import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function BankExpenses() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);
    return (
        <>
            <PageHeaderWithOutButton header="Financial Institution Expenses Index"/>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Expense Batches By</legend>
                    <div className={styles.formFields}>
                        <Row>
                        <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Start Processing Date</Form.Label>
                                <Form.Select {...register("StartProcessingDate")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>End Processing Date</Form.Label>
                                <Form.Select {...register("EndProcessingDate")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>
        </>
    )
}