import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function APIProfiles() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return (
        <>
            <PageHeaderWithButton header="Heartland Users Index" link="../../../Configuration/Profiles/HeartlandUsers/Create" text="Add New Heartland User" />
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Merchants By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Email")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-12", styles.formInput, styles.formSwitch].join(' ')}>
                                <Form.Label>Show Only Heartland Users with No Claims</Form.Label>
                                <Form.Check type="switch" {...register("ShowOnlyHeartlandUsersWithNoClaims")}/>
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
