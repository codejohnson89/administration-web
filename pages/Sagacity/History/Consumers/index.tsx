import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function Consumers():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Consumer Index"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Consumers By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("FirstName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" {...register("LastName")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" {...register("CompanyName")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("AddressLine1")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" {...register("City")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" {...register("State")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>ZIP Code</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("ZIPCode")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Tax ID</Form.Label>
                                <Form.Control type="text" {...register("TaxID")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" {...register("PhoneNumber")}/>
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