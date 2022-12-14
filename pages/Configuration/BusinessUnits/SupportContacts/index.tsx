import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function BusinessUnits() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Financial Institution Index" link="../../../Configuration/ODFIs/FinancialInstitution/Create" text="Add New Financial Institution" />
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Billing Groups Chains By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Name")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("EmailAddress")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("PhoneNumber")}/>
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
