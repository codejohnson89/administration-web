import { Button, Form, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from "../../../../Components/PageHeader";
import styles from '../../styles.module.css';
import Link from "next/link";


export default function BusinessUnits():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton header="Business Units Index" link="BusinessUnits/create" text="Add New Business Unit"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Business Units By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("Name")}/>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                        <Row>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Business Unit</th>
                                        <th>Risk Tolerance</th>
                                        <th>Created Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><Link className={styles.link} href={{pathname: "BusinessUnits/details"}}>The Giants</Link></th>
                                        <th>Low</th>
                                        <th>9/25/2015 10:29:24 AM -05.00</th>
                                    </tr>
                                    <tr>
                                        <th><Link className={styles.link} href={{pathname: "BusinessUnits/details"}}>The Patriots</Link></th>
                                        <th>Low</th>
                                        <th>9/25/2015 10:29:24 AM -05.00</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </div>
                </Form>
            </section>
        </>
    )
}