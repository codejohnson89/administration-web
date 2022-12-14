import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function BillingGroupChains() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);
    return ( 
        <>
            <PageHeaderWithButton header="Relationship Managers Index" text="Add New Relationship Manager" link="../../../Configuration/Merchants/RelationshipManagers/Create"/>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Billing Groups Chains By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Name")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Email")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Phone")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Is Synced</Form.Label>
                                <Form.Select {...register("IsSynced")}>
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
